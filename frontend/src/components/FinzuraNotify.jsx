import React from "react";

const FinzuraNotify = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0a0a0a", color: "#fff" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Finzura Notification Signup</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: 500, textAlign: "center" }}>
        Thank you for your interest in Finzura! Please enter your email below and we’ll notify you as soon as Finzura is available.
      </p>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%", maxWidth: 400 }}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={{ padding: "0.75rem 1rem", borderRadius: 8, border: "none", width: "100%", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ padding: "0.75rem 2rem", borderRadius: 8, background: "#059669", color: "#fff", border: "none", fontSize: "1.1rem", cursor: "pointer" }}
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default FinzuraNotify;
