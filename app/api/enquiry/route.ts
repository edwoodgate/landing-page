export async function POST(request: Request) {
  const form = await request.formData();

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();

  // Honeypot field (bots fill it, humans won't)
  const company = String(form.get("company") || "").trim();
  if (company) {
    // Pretend success
    const url = new URL(request.url);
    url.pathname = "/";
    url.searchParams.set("sent", "1");
    return Response.redirect(url, 303);
  }

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN;

  if (!repo || !token) {
    return new Response("Server not configured (missing env vars)", { status: 500 });
  }

  const issueTitle = `Website enquiry: ${name}`;
  const issueBody =
    `@${process.env.GITHUB_MENTION || "edwoodgate"}\n\n` +
    `**Name:** ${name}\n` +
    `**Email:** ${email}\n\n` +
    `**Message:**\n${message}\n`;

  const res = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "redgumcapital-site",
    },
    body: JSON.stringify({ title: issueTitle, body: issueBody }),
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(`GitHub API error: ${text}`, { status: 502 });
  }

  const url = new URL(request.url);
  url.pathname = "/";
  url.searchParams.set("sent", "1");
  return Response.redirect(url, 303);
}
