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
      }}
    >
      <h1
        style={{
          fontFamily: '"Felix Titling", "Times New Roman", serif',
          fontSize: 36,
          fontWeight: 400,
          margin: 0,
        }}
      >
        Redgum Capital Partners
      </h1>

      <p style={{ margin: "16px 0 0" }}>
        Patient capital. Practical support. Owner orientated.
      </p>
    </main>
  );
}
