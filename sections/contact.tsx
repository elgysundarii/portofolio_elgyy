"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Music2, Github, Mail, Phone } from "lucide-react";

export default function Contact() {
    useEffect(() => {
        const handleScroll = () => {}; // keeping effect if needed later or just remove
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const socials = [
        { icon: <Mail size={24} />, label: "Email", color: "#e91e8c", href: "mailto:elgysundariii@gmail.com" },
        { icon: <Phone size={24} />, label: "Phone", color: "#25D366", href: "tel:+6283137735798" },
        { icon: <Github size={24} />, label: "GitHub", color: "#333", href: "https://github.com/elgysundarii" },
        { icon: <Linkedin size={24} />, label: "LinkedIn", color: "#0077b5", href: "https://www.linkedin.com/in/elgy-sundari-7526a0295/" },
        { icon: <Instagram size={24} />, label: "Instagram", color: "#e4405f", href: "https://www.instagram.com/elgysundarii/" },
        { icon: <Music2 size={24} />, label: "TikTok", color: "#000000", href: "https://www.tiktok.com/@elgysundarii?_r=1&_t=ZS-93HmKm2AzYL" }
    ];

    return (
        <section id="contact" style={{ padding: "120px 60px", position: "relative", background: "linear-gradient(to bottom, #fff 0%, #fff0f6 100%)", overflow: "hidden" }}>
            
            {/* Elegant Background Shapes */}
            <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "500px", height: "500px", background: "rgba(233, 30, 140, 0.03)", borderRadius: "50%", filter: "blur(60px)" }} />
            <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "400px", height: "400px", background: "rgba(30, 58, 95, 0.03)", borderRadius: "50%", filter: "blur(60px)" }} />

            {/* Floating elegant items */}
            <div style={{ position: "absolute", top: "15%", left: "12%", fontSize: "2rem", opacity: 0.3, animation: "floatSlow 6s ease-in-out infinite" }}>🦋</div>
            <div style={{ position: "absolute", bottom: "20%", right: "10%", fontSize: "2.2rem", opacity: 0.25, animation: "floatSlow 8s ease-in-out infinite 1s" }}>🌸</div>
            <div style={{ position: "absolute", top: "40%", right: "5%", fontSize: "1.5rem", opacity: 0.2, animation: "floatSlow 5s ease-in-out infinite 0.5s" }}>✨</div>

            <style jsx>{`
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(15deg); }
                }
                @keyframes cardHover {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.02); }
                }
            `}</style>

            <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ textAlign: "center", marginBottom: "80px" }}>
                        <span style={{ display: "inline-block", padding: "12px 30px", background: "rgba(233, 30, 140, 0.1)", color: "#e91e8c", borderRadius: "50px", fontSize: "0.95rem", fontWeight: 600, marginBottom: "20px", border: "1px solid rgba(233, 30, 140, 0.2)" }}>
                            Let&apos;s Connect
                        </span>
                        <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.8rem, 6vw, 4rem)", fontWeight: 800, color: "#1e3a5f", lineHeight: 1.1, marginBottom: "20px" }}>
                            Say <span style={{ color: "#e91e8c" }}>Hi</span> to eljii !
                        </h2>
                        <div style={{ width: "80px", height: "4px", background: "#e91e8c", margin: "0 auto", borderRadius: "2px", marginBottom: "30px" }} />
                        
                        {/* Deep Quote Section */}
                        <div style={{ maxWidth: "600px", margin: "0 auto", fontStyle: "italic", color: "#5a6a7a", fontSize: "1.1rem", lineHeight: "1.6" }}>
                            <p>&quot;Bukan tentang seberapa cepat kita sampai, tapi tentang seberapa besar hati yang kita bawa dalam setiap perjalanan.&quot;</p>
                            <span style={{ fontSize: "0.9rem", color: "#e91e8c", fontWeight: 600, marginTop: "10px", display: "block" }}>— Eljii</span>
                        </div>
                    </div>
                </ScrollAnimate>

                {/* Socials - More prominent */}
                <ScrollAnimate animation="fadeUp" delay={0.4}>
                    <div style={{ background: "#1e3a5f", borderRadius: "40px", padding: "50px", textAlign: "center", boxShadow: "0 25px 50px rgba(30, 58, 95, 0.2)", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(to right, #e91e8c, #ff6b9d, #e91e8c)" }} />
                        <h3 style={{ color: "#fff", fontFamily: "'Quicksand', sans-serif", fontSize: "1.8rem", marginBottom: "30px" }}>Catch me on social media</h3>
                        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                            {socials.map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ padding: "16px 32px", display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px", color: "#fff", transition: "all 0.3s", textDecoration: "none" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = s.color; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = s.color; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>
                                    {s.icon}
                                    <span style={{ fontWeight: 600 }}>{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </ScrollAnimate>

                {/* Footer */}
                <ScrollAnimate animation="fadeIn" delay={0.6}>
                    <div style={{ textAlign: "center", marginTop: "100px", paddingBottom: "40px" }}>
                        <p style={{ color: "#5a6a7a", fontSize: "1rem", fontWeight: 500 }}>
                            © 2026 <span style={{ color: "#1e3a5f", fontWeight: 700 }}>Elgy Sundari</span>. Crafted with ❤️
                        </p>
                    </div>
                </ScrollAnimate>
            </div>

            <style jsx>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}

