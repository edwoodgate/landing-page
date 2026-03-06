import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        fontFamily:
          '"Segoe UI Variable Display", "Segoe UI", system-ui, -apple-system, Arial, sans-serif',
        fontWeight: 300,
        fontSize: 18,
        lineHeight: 1.5,
      }}
    >
      {/* Structured data (not visible on page) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Redgum Capital Partners",
            url: "https://www.redgumcapital.com",
            email: "enquiries@redgumcapital.com",
          }),
        }}
      />

      {/* TOP (Dark) SECTION */}
      <section
        style={{
          backgroundColor: "#2B2F38",
          color: "#FFFFFF",
          width: "100%",
          padding: "120px 24px 56px",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <h1
            className={cinzel.className}
            style={{ fontSize: 36, fontWeight: 400, margin: 0, color: "#FFFFFF" }}
          >
            Redgum Capital
            <br />
            <span style={{ display: "inline-block", paddingLeft: 24 }}>
              Partners
            </span>
          </h1>
        </div>
      </section>

      {/* BOTTOM (White) SECTION */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          color: "#000000",
          width: "100%",
          padding: "56px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ margin: "0 0 28px" }}>
            Patient capital. Practical support. Owner orientated.
          </p>

          <form
            action="/api/enquiry"
            method="POST"
            style={{
              width: "100%",
              maxWidth: 400,
              background: "#FFFFFF",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            <input
              name="name"
              placeholder="Name"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                marginBottom: 10,
                font: "inherit",
                fontSize: 13,
              }}
            />

            <input
              name="email"
              placeholder="Email"
              type="email"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                marginBottom: 10,
                font: "inherit",
                fontSize: 13,
              }}
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                minHeight: 70,
                marginBottom: 12,
                font: "inherit",
                fontSize: 13,
                resize: "vertical",
              }}
            />

            {/* Honeypot (hidden) */}
            <input
              name="company"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 12,
                border: "none",
                background: "#2B2F38",
                color: "#FFFFFF",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
