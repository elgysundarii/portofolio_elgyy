"use client";

import { useState } from "react";
import ScrollAnimate from "@/components/ScrollAnimate";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [focused, setFocused] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:elgysundariii@gmail.com?subject=Portfolio - ${form.name}&body=${form.message}`;
    };

    const contacts = [
        { icon: "📧", label: "Email", value: "elgysundariii@gmail.com", href: "mailto:elgysundariii@gmail.com" },
        { icon: "📱", label: "Phone", value: "+62 831-3773-5798", href: "tel:+6283137735798" },
        { icon: "💼", label: "LinkedIn", value: "Elgy Sundari", href: "https://linkedin.com" },
    ];

    return (
        <section id="contact" style={{ padding: "120px 50px", maxWidth: "1400px", margin: "0 auto", position: "relative" }}>

            {/* Background accents */}
            <div style={{ position: "absolute", top: "20%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: "10%", right: "-10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <span style={{ color: "#14b8a6", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Contact</span>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, marginTop: "16px" }}>
                            Let's <span style={{ background: "linear-gradient(90deg, #14b8a6, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
                        </h2>
                        <p style={{ color: "rgba(248, 250, 252, 0.6)", fontSize: "1.1rem", marginTop: "16px", maxWidth: "500px", margin: "16px auto 0" }}>
                            Have a project in mind? Let's create something amazing together!
                        </p>
                    </div>
                </ScrollAnimate>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }} className="contact-grid">
                    {/* Left - Contact info */}
                    <div>
                        <ScrollAnimate animation="fadeLeft">
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "24px" }}>Get in Touch</h3>
                        </ScrollAnimate>

                        {contacts.map((c, i) => (
                            <ScrollAnimate key={i} animation="fadeLeft" delay={0.1 + i * 0.1}>
                                <a href={c.href} target="_blank" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", background: "rgba(13, 148, 136, 0.05)", border: "1px solid rgba(13, 148, 136, 0.1)", borderRadius: "16px", marginBottom: "12px", transition: "all 0.3s", textDecoration: "none" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#14b8a6"; e.currentTarget.style.transform = "translateX(8px)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.1)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                                    <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                                    <div>
                                        <p style={{ color: "rgba(248, 250, 252, 0.5)", fontSize: "0.85rem" }}>{c.label}</p>
                                        <p style={{ color: "#f8fafc", fontWeight: 500 }}>{c.value}</p>
                                    </div>
                                </a>
                            </ScrollAnimate>
                        ))}

                        {/* Social links */}
                        <ScrollAnimate animation="fadeLeft" delay={0.4}>
                            <div style={{ marginTop: "32px" }}>
                                <p style={{ color: "rgba(248, 250, 252, 0.5)", fontSize: "0.9rem", marginBottom: "16px" }}>Follow me</p>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    {["GitHub", "LinkedIn", "Instagram"].map((s, i) => (
                                        <a key={i} href="#" style={{ padding: "12px 20px", background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)", borderRadius: "12px", fontSize: "0.85rem", color: "#f8fafc", transition: "all 0.3s" }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = i % 2 === 0 ? "#14b8a6" : "#ec4899"; e.currentTarget.style.borderColor = "transparent"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(13, 148, 136, 0.1)"; e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.2)"; }}>
                                            {s}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimate>
                    </div>

                    {/* Right - Form */}
                    <ScrollAnimate animation="fadeRight" delay={0.2}>
                        <form onSubmit={handleSubmit} style={{ background: "rgba(13, 148, 136, 0.05)", border: "1px solid rgba(13, 148, 136, 0.1)", borderRadius: "24px", padding: "40px" }}>
                            {["name", "email"].map((field) => (
                                <div key={field} style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", color: focused === field ? "#14b8a6" : "rgba(248, 250, 252, 0.6)", fontSize: "0.9rem", marginBottom: "8px", transition: "color 0.3s", textTransform: "capitalize" }}>{field}</label>
                                    <input type={field === "email" ? "email" : "text"} required value={form[field as keyof typeof form]}
                                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                                        onFocus={() => setFocused(field)} onBlur={() => setFocused("")}
                                        style={{ width: "100%", padding: "16px", background: "rgba(7, 26, 31, 0.6)", border: `2px solid ${focused === field ? "#14b8a6" : "rgba(13, 148, 136, 0.2)"}`, borderRadius: "12px", color: "#f8fafc", fontSize: "1rem", outline: "none", transition: "all 0.3s" }} />
                                </div>
                            ))}
                            <div style={{ marginBottom: "24px" }}>
                                <label style={{ display: "block", color: focused === "message" ? "#14b8a6" : "rgba(248, 250, 252, 0.6)", fontSize: "0.9rem", marginBottom: "8px", transition: "color 0.3s" }}>Message</label>
                                <textarea required rows={4} value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                                    style={{ width: "100%", padding: "16px", background: "rgba(7, 26, 31, 0.6)", border: `2px solid ${focused === "message" ? "#14b8a6" : "rgba(13, 148, 136, 0.2)"}`, borderRadius: "12px", color: "#f8fafc", fontSize: "1rem", outline: "none", resize: "vertical", transition: "all 0.3s" }} />
                            </div>
                            <button type="submit" style={{ width: "100%", padding: "18px", background: "linear-gradient(135deg, #0d9488, #14b8a6)", border: "none", borderRadius: "12px", color: "#071a1f", fontSize: "1rem", fontWeight: 700, cursor: "pointer", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(13, 148, 136, 0.4)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                                Send Message →
                            </button>
                        </form>
                    </ScrollAnimate>
                </div>

                {/* Footer */}
                <ScrollAnimate animation="fadeIn" delay={0.5}>
                    <div style={{ textAlign: "center", marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(13, 148, 136, 0.1)" }}>
                        <p style={{ color: "rgba(248, 250, 252, 0.5)", fontSize: "0.9rem" }}>
                            © 2025 Elgy Sundari. Built with <span style={{ color: "#ec4899" }}>♥</span> and lots of coffee ☕
                        </p>
                    </div>
                </ScrollAnimate>
            </div>

            <style jsx>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}
