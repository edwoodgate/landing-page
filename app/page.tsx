import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "48px 24px",
        paddingTop: "120px",
        maxWidth: "100%",
        margin: "0 auto",
        background: "linear-gradient(to bottom, #2B2F38 0%, #2B2F38 40%, #FFFFFF 40%, #FFFFFF 100%)",
        color: "#000000",
        fontFamily:
          '"Segoe UI Variable Display", "Segoe UI", system-ui, -apple-system, Arial, sans-serif',
        fontWeight: 300,
        fontSize: 18,
        lineHeight: 1.5,
        alignItems: "center",
textAlign: "center",
      }}
    >
      <h1
        className={cinzel.className}
        style={{ fontSize: 36, fontWeight: 400, margin: 0, color: "#FFFFFF"  }}
      >
        Redgum Capital<br />
  <span style={{ display: "inline-block", paddingLeft: 24 }}>Partners</span>
      </h1>

      <p style={{ margin: "124px 0 0" }}>
        Patient capital. Practical support. Owner orientated.
      </p>

      <form
  action="/api/enquiry"
  method="POST"
  style={{
    marginTop: 28,
    width: "100%",
    maxWidth: 520,
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
      fontSize: 12
      resize: "vertical",
    }}
  />

  {/* Honeypot (hidden) */}
  <input name="company" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

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
    }}
  >
    Send enquiry
  </button>
</form>

    </main>
  );
}
