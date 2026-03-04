import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 24px",
        maxWidth: 960,
        margin: "0 auto",
        background: "#ffffff",
        color: "#000000",
        fontFamily:
          '"Segoe UI Variable Display", "Segoe UI", system-ui, -apple-system, Arial, sans-serif',
        fontWeight: 300,
        fontSize: 14,
        lineHeight: 1.5,
        alignItems: "center",
textAlign: "center",
      }}
    >
      <h1
        className={cinzel.className}
        style={{ fontSize: 36, fontWeight: 400, margin: 0 }}
      >
        Coming Soon
      </h1>

      <p style={{ margin: "16px 0 0" }}>
        PC.
      </p>
    </main>
  );
}
