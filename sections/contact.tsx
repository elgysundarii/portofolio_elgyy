"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import { useEffect, useState } from "react";

export default function Contact() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const contacts = [
        { label: "Email", value: "elgysundariii@gmail.com", href: "mailto:elgysundariii@gmail.com" },
        { label: "Phone", value: "+62 831-3773-5798", href: "tel:+6283137735798" },
        { label: "LinkedIn", value: "Elgy Sundari", href: "https://linkedin.com" },
    ];

    const socials = [
        { icon: "GH", label: "GitHub", color: "#1e3a5f" },
        { icon: "in", label: "LinkedIn", color: "#e91e8c" },
        { icon: "IG", label: "Instagram", color: "#1e3a5f" }
    ];

    return (
        <section id="contact" style={{ padding: "120px 60px", position: "relative", background: "#fff", overflow: "hidden" }}>
            
            {/* Decorative with parallax */}
            <div style={{ position: "absolute", top: "20%", right: "-5%", width: "300px", height: "300px", border: "40px solid rgba(30, 58, 95, 0.05)", borderRadius: "50%", transform: `translateY(${(scrollY - 2500) * 0.05}px)`, transition: "transform 0.1s ease-out" }} />
            <div style={{ position: "absolute", bottom: "15%", left: "-3%", width: "150px", height: "150px", border: "25px solid rgba(233, 30, 140, 0.08)", borderRadius: "50%", transform: `translateY(${(scrollY - 2500) * -0.03}px)`, transition: "transform 0.1s ease-out" }} />
            
            {/* Floating hearts & sparkles */}
            <div style={{ position: "absolute", top: "10%", left: "10%", fontSize: "2rem", opacity: 0.25, animation: "heartbeat 2s ease-in-out infinite" }}>💌</div>
            <div style={{ position: "absolute", bottom: "25%", right: "12%", fontSize: "1.8rem", opacity: 0.2, animation: "heartbeat 2.5s ease-in-out infinite 0.3s" }}>💖</div>
            <div style={{ position: "absolute", top: "40%", left: "5%", fontSize: "1.5rem", opacity: 0.15, animation: "sparkle 3s ease-in-out infinite" }}>✨</div>
            <div style={{ position: "absolute", top: "60%", right: "8%", fontSize: "1.6rem", opacity: 0.2, animation: "sparkle 4s ease-in-out infinite 1s" }}>🌟</div>

            <style jsx>{`
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.1); }
                    50% { transform: scale(1); }
                    75% { transform: scale(1.15); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0.15; transform: scale(1) rotate(0deg); }
                    50% { opacity: 0.4; transform: scale(1.2) rotate(10deg); }
                }
            `}</style>

            <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <span style={{ display: "inline-block", padding: "10px 24px", background: "#1e3a5f", color: "#fff", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 500, marginBottom: "20px" }}>
                            Get in Touch
                        </span>
                        <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "#1e3a5f", lineHeight: 1.2, marginBottom: "16px" }}>
                            Let&apos;s Work Together
                        </h2>
                        <p style={{ color: "#5a6a7a", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>
                            Have a project in mind? I&apos;d love to hear from you.
                        </p>
                    </div>
                </ScrollAnimate>

                {/* Contact cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "50px" }} className="contact-grid">
                    {contacts.map((c, i) => (
                        <ScrollAnimate key={i} animation="fadeUp" delay={i * 0.1}>
                            <a href={c.href} target="_blank" style={{ display: "block", padding: "28px 24px", background: "#f8f9fa", borderRadius: "20px", textAlign: "center", transition: "all 0.3s", textDecoration: "none", border: "2px solid transparent" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e91e8c"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(233, 30, 140, 0.15)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                                <p style={{ color: "#5a6a7a", fontSize: "0.85rem", marginBottom: "8px" }}>{c.label}</p>
                                <p style={{ color: "#1e3a5f", fontWeight: 600, fontSize: "1rem" }}>{c.value}</p>
                            </a>
                        </ScrollAnimate>
                    ))}
                </div>

                {/* Socials */}
                <ScrollAnimate animation="fadeUp" delay={0.3}>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#5a6a7a", fontSize: "0.9rem", marginBottom: "20px" }}>Follow me</p>
                        <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
                            {socials.map((s, i) => (
                                <a key={i} href="#" style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f9fa", border: "2px solid transparent", borderRadius: "16px", color: "#1e3a5f", fontSize: "1rem", fontWeight: 600, transition: "all 0.3s" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "#f8f9fa"; e.currentTarget.style.color = "#1e3a5f"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </ScrollAnimate>

                {/* Footer */}
                <ScrollAnimate animation="fadeIn" delay={0.4}>
                    <div style={{ textAlign: "center", marginTop: "80px", paddingTop: "40px", borderTop: "1px solid #e5e7eb" }}>
                        <p style={{ color: "#5a6a7a", fontSize: "0.9rem" }}>
                            © 2025 Elgy Sundari. All rights reserved.
                        </p>
                    </div>
                </ScrollAnimate>
            </div>

            <style jsx>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}
