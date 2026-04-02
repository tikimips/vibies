"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#F2EDE6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Nunito', sans-serif",
      padding: "40px 24px",
    }}>

      {/* Logo */}
      <div style={{
        background: "#8B7355",
        borderRadius: "28px",
        width: "88px",
        height: "88px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "32px",
        boxShadow: "0 4px 20px rgba(139,115,85,0.25)",
      }}>
        <span style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 900,
          fontSize: "32px",
          color: "#F2EDE6",
          letterSpacing: "-1px",
        }}>v.</span>
      </div>

      {/* Wordmark */}
      <div style={{
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 900,
        fontSize: "48px",
        color: "#3D3028",
        letterSpacing: "-2px",
        marginBottom: "16px",
        lineHeight: 1,
      }}>
        vibies
      </div>

      {/* Tagline */}
      <p style={{
        fontSize: "18px",
        color: "#7A6B5E",
        marginBottom: "40px",
        textAlign: "center",
        maxWidth: "340px",
        lineHeight: 1.5,
        fontWeight: 600,
      }}>
        Sign up for beta access to the coolest gifts around.
      </p>

      {/* Form */}
      {submitted ? (
        <div style={{
          background: "#E8E0D4",
          border: "2px solid #8B7355",
          borderRadius: "20px",
          padding: "20px 28px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "26px", marginBottom: "6px" }}>✦</div>
          <p style={{ fontWeight: 900, fontSize: "17px", color: "#3D3028", margin: 0 }}>You&apos;re in.</p>
          <p style={{ fontSize: "14px", color: "#7A6B5E", marginTop: "4px", margin: "4px 0 0" }}>We&apos;ll reach out when access opens up.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "360px" }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "16px 22px",
              borderRadius: "100px",
              border: "2px solid #C9BFB3",
              fontSize: "15px",
              outline: "none",
              fontFamily: "'Nunito', sans-serif",
              background: "white",
              color: "#3D3028",
              width: "100%",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#8B7355",
              color: "#F2EDE6",
              fontWeight: 900,
              fontSize: "16px",
              padding: "16px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Nunito', sans-serif",
              opacity: loading ? 0.7 : 1,
              transition: "opacity 0.2s",
            }}
          >
            {loading ? "..." : "Request access"}
          </button>
        </form>
      )}

    </main>
  );
}
