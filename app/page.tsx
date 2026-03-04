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
    </main>
  );
}
