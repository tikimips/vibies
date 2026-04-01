export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#FFF8F0", fontFamily: "'Nunito', sans-serif" }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-5xl mx-auto">
        <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "28px", color: "#7BA7BC", letterSpacing: "-0.5px" }}>
          vibies
        </div>
        <a
          href="#notify"
          style={{
            background: "#7BA7BC",
            color: "white",
            fontWeight: 800,
            fontSize: "14px",
            padding: "10px 24px",
            borderRadius: "100px",
            textDecoration: "none",
            letterSpacing: "0.3px",
          }}
        >
          Get notified
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-12 pb-24 flex flex-col md:flex-row items-center gap-16">

        {/* Left — text */}
        <div className="flex-1">
          <div style={{
            display: "inline-block",
            background: "#E8836A",
            color: "white",
            fontWeight: 800,
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "100px",
            marginBottom: "20px",
          }}>
            Coming Soon
          </div>

          <h1 style={{
            fontWeight: 900,
            fontSize: "clamp(42px, 6vw, 72px)",
            lineHeight: 1.05,
            color: "#1a1a2e",
            marginBottom: "20px",
          }}>
            The satisfying<br />
            <span style={{ color: "#7BA7BC" }}>click.</span> The feel.<br />
            The <span style={{ color: "#E8836A" }}>vibe.</span>
          </h1>

          <p style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#555",
            marginBottom: "36px",
            maxWidth: "420px",
          }}>
            3D printed fidget toys designed to feel incredible in your hands. Flexi dragons, character planters, and more — each one satisfying in its own way.
          </p>

          {/* Email capture */}
          <div id="notify">
            <form
              style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  minWidth: "220px",
                  padding: "14px 20px",
                  borderRadius: "100px",
                  border: "2px solid #ddd",
                  fontSize: "15px",
                  outline: "none",
                  fontFamily: "'Nunito', sans-serif",
                  background: "white",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#7BA7BC",
                  color: "white",
                  fontWeight: 900,
                  fontSize: "15px",
                  padding: "14px 28px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Notify me
              </button>
            </form>
            <p style={{ fontSize: "13px", color: "#aaa", marginTop: "10px" }}>
              Be first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>

        {/* Right — floating toy illustrations */}
        <div className="flex-1 relative" style={{ minHeight: "360px" }}>
          {/* Dragon */}
          <div className="float-1 absolute" style={{ top: "20px", left: "10%", fontSize: "110px" }}>
            🐉
          </div>
          {/* Star */}
          <div className="float-2 absolute" style={{ top: "10px", right: "15%", fontSize: "70px" }}>
            ⭐
          </div>
          {/* Cactus planter */}
          <div className="float-3 absolute" style={{ bottom: "30px", left: "35%", fontSize: "90px" }}>
            🌵
          </div>
          {/* Smiley */}
          <div className="float-2 absolute" style={{ bottom: "20px", right: "5%", fontSize: "75px" }}>
            😊
          </div>
          {/* Sparkles */}
          <div className="float-1 absolute" style={{ top: "50%", left: "60%", fontSize: "50px", opacity: 0.6 }}>
            ✨
          </div>
        </div>

      </section>

      {/* Value props */}
      <section style={{ background: "white", padding: "64px 0" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
            {[
              { icon: "🖨️", title: "3D Printed", desc: "Every piece made fresh. No mass production, no cutting corners." },
              { icon: "🤌", title: "Feels incredible", desc: "Designed for the satisfying click, flex, and feel that you can't put down." },
              { icon: "🌈", title: "Endless variety", desc: "Dragons, creatures, planters — new drops all the time." },
              { icon: "🎁", title: "Perfect gifts", desc: "For kids, for desks, for anyone who just needs to fidget a little." },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "24px" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>{item.icon}</div>
                <h3 style={{ fontWeight: 900, fontSize: "18px", marginBottom: "8px", color: "#1a1a2e" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 32px", textAlign: "center" }}>
        <div style={{ fontWeight: 900, fontSize: "22px", color: "#7BA7BC", marginBottom: "8px" }}>vibies</div>
        <p style={{ fontSize: "13px", color: "#bbb" }}>© 2026 Vibies. Los Angeles, CA.</p>
      </footer>

    </main>
  );
}
