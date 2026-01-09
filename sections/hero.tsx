"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    return (
        <section id="hero" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #071a1f 0%, #0a2e36 50%, #071a1f 100%)" }}>

            {/* Gradient glow effects */}
            <div style={{ position: "absolute", top: "20%", left: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(13, 148, 136, 0.3) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: "10%", right: "20%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)", filter: "blur(50px)", zIndex: 0 }} />

            {/* Grid pattern overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(13, 148, 136, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 1 }} />

            {/* Nav */}
            <nav style={{ position: "absolute", top: "30px", left: "50px", right: "50px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 100 }}>
                <a href="#hero" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f8fafc" }}>
                    E<span style={{ color: "#14b8a6" }}>.</span>
                </a>
                <div style={{ display: "flex", gap: "8px" }}>
                    {["About", "Work", "Contact"].map((item, i) => (
                        <a key={item} href={`#${item.toLowerCase() === "work" ? "projects" : item.toLowerCase()}`}
                            onClick={(e) => { e.preventDefault(); document.querySelector(`#${item.toLowerCase() === "work" ? "projects" : item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" }); }}
                            style={{ padding: "10px 22px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 500, color: "#f8fafc", background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)", transition: "all 0.3s", cursor: "pointer" }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13, 148, 136, 0.25)"; e.currentTarget.style.borderColor = "#14b8a6"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(13, 148, 136, 0.1)"; e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.2)"; }}>
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Main content */}
            <div style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", alignItems: "center", maxWidth: "1600px", margin: "0 auto", padding: "100px 50px 0" }}>

                {/* Left - Text */}
                <div style={{ flex: 1, maxWidth: "600px", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(50px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}>

                    {/* Tag */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.3)", borderRadius: "50px", marginBottom: "24px" }}>
                        <span style={{ width: "8px", height: "8px", background: "#ec4899", borderRadius: "50%", animation: "glow 2s ease-in-out infinite" }} />
                        <span style={{ color: "#f472b6", fontSize: "0.85rem", fontWeight: 500 }}>Available for work</span>
                    </div>

                    {/* Name */}
                    <h1 style={{ marginBottom: "24px" }}>
                        <span style={{ display: "block", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(248, 250, 252, 0.6)", fontWeight: 500, marginBottom: "8px", letterSpacing: "3px", textTransform: "uppercase" }}>
                            Hello, I'm
                        </span>
                        <span style={{ display: "block", fontSize: "clamp(4rem, 12vw, 8rem)", fontWeight: 900, background: "linear-gradient(135deg, #f8fafc 0%, #14b8a6 50%, #ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-4px", lineHeight: 0.95 }}>
                            Elgy
                        </span>
                        <span style={{ display: "block", fontSize: "clamp(4rem, 12vw, 8rem)", fontWeight: 900, color: "#f8fafc", letterSpacing: "-4px", lineHeight: 0.95, marginTop: "-10px" }}>
                            Sundari
                        </span>
                    </h1>

                    {/* Role with gradient underline */}
                    <div style={{ marginBottom: "28px" }}>
                        <p style={{ fontSize: "1.3rem", color: "#f8fafc", fontWeight: 500, display: "inline" }}>
                            UI/UX Designer <span style={{ color: "#14b8a6" }}>&</span> QA Engineer
                        </p>
                        <div style={{ width: "100px", height: "3px", background: "linear-gradient(90deg, #14b8a6, #ec4899)", borderRadius: "2px", marginTop: "12px" }} />
                    </div>

                    <p style={{ fontSize: "1.1rem", color: "rgba(248, 250, 252, 0.7)", lineHeight: 1.8, marginBottom: "36px", maxWidth: "480px" }}>
                        Crafting stunning digital experiences with clean design and bulletproof quality. Let's build something amazing together.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                            style={{ padding: "18px 40px", background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)", color: "#071a1f", borderRadius: "50px", fontWeight: 700, fontSize: "1rem", boxShadow: "0 10px 40px rgba(13, 148, 136, 0.4)", transition: "all 0.3s", cursor: "pointer" }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(13, 148, 136, 0.5)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(13, 148, 136, 0.4)"; }}>
                            View My Work
                        </a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                            style={{ padding: "18px 40px", background: "transparent", border: "2px solid rgba(248, 250, 252, 0.3)", color: "#f8fafc", borderRadius: "50px", fontWeight: 600, fontSize: "1rem", transition: "all 0.3s", cursor: "pointer" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ec4899"; e.currentTarget.style.color = "#ec4899"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(248, 250, 252, 0.3)"; e.currentTarget.style.color = "#f8fafc"; }}>
                            Get in Touch
                        </a>
                    </div>

                    {/* Socials */}
                    <div style={{ display: "flex", gap: "12px", marginTop: "48px" }}>
                        {["LinkedIn", "GitHub", "Email"].map((s, i) => (
                            <a key={i} href={s === "Email" ? "mailto:elgysundariii@gmail.com" : `https://${s.toLowerCase()}.com`} target="_blank"
                                style={{ padding: "12px 20px", background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)", borderRadius: "12px", fontSize: "0.85rem", color: "rgba(248, 250, 252, 0.8)", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13, 148, 136, 0.2)"; e.currentTarget.style.borderColor = "#14b8a6"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(13, 148, 136, 0.1)"; e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.2)"; }}>
                                {s}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right - HUGE Photo */}
                <div style={{ position: "absolute", right: "-5%", bottom: "0", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0.95)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s" }}>
                    {/* Glow behind photo */}
                    <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "300px", background: "radial-gradient(ellipse, rgba(13, 148, 136, 0.4) 0%, transparent 70%)", filter: "blur(60px)", zIndex: -1 }} />

                    <div style={{ position: "relative", width: "clamp(500px, 60vw, 900px)", height: "clamp(600px, 75vw, 1000px)" }}>
                        <Image src="/elgy-cutout.png" alt="Elgy Sundari" fill style={{ objectFit: "contain", objectPosition: "center bottom" }} priority />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 50, opacity: mounted ? 0.6 : 0, transition: "opacity 1s 1.5s" }}>
                <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, transparent, #14b8a6)" }} />
                <span style={{ fontSize: "0.7rem", color: "#14b8a6", letterSpacing: "2px" }}>SCROLL</span>
            </div>

            <style jsx>{`
        @keyframes glow { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @media (max-width: 1200px) {
          section > div:nth-child(5) > div:last-child { position: relative !important; right: auto !important; margin-top: 50px; }
        }
      `}</style>
        </section>
    );
}
