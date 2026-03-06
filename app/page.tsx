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

      {/* BOTTOM (White) SECTION - BODY 1 TEXT*/}
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
            Patient capital. Practical support. Owner orientated. <br />
          </p>

        {/* BOTTOM (White) SECTION - BODY 2 TEXT */}
          <p 
            style={{ 
              margin: "0 0 28px", 
              maxWidth: 760, 
              fontSize: 14, 
              color: "#111827",
              textAlign: "justify",   
            }}
          >
              Redgum is an investment firm that partners with founders and management teams to help great
              businesses take the next step. We invest with a long-term mindset, move quickly and
              confidentially, and enable management to scale their business. We bring our experience and
              support on automation, AI implementation, strategy, operations, sales, systems, talent and
              acquisitions, while preserving what already makes businesses successful.
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

    {/* FOOTER / INFO SECTION */}
      <section
        style={{
          backgroundColor: "#F3F4F6",
          color: "#000000",
          width: "100%",
          padding: "24px 24px 48px",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Contact</div>
            <div>enquiries@redgumcapital.com</div>
          </div>
      
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Address</div>
            <div>
              Level 23, 52 Martin Place<br />
              Sydney<br />
              NSW 2000</div>
          </div>
      
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Legal</div>
            <div>© {new Date().getFullYear()} Redgum Capital Partners</div>
          </div>
        </div>
      </section>
    </main>
  );
}
