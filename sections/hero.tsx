"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section id="hero" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: "#1e3a5f" }}>
            
            {/* Curved white shape */}
            <div style={{ position: "absolute", top: 0, left: "25%", right: 0, bottom: 0, background: "#fff", borderRadius: "0 0 0 50%", transform: "scaleX(1.5)", transformOrigin: "right" }} />
            
            {/* Decorative circles - scattered */}
            <div style={{ position: "absolute", top: "12%", right: "8%", width: "120px", height: "120px", border: "18px solid rgba(233, 30, 140, 0.3)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "25%", left: "3%", width: "90px", height: "90px", border: "12px solid rgba(255,255,255,0.2)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: "60%", left: "6%", width: "50px", height: "50px", background: "#e91e8c", borderRadius: "50%", opacity: 0.4 }} />
            <div style={{ position: "absolute", top: "20%", right: "25%", width: "70px", height: "70px", background: "rgba(255,255,255,0.15)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "15%", right: "12%", width: "60px", height: "60px", border: "10px solid rgba(233, 30, 140, 0.2)", borderRadius: "50%" }} />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 60px", maxWidth: "1700px", margin: "0 auto" }}>
                
                {/* Top Left - I'm */}
                <div style={{ position: "absolute", left: "3%", top: "20%", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(-20px)", transition: "all 0.8s ease-out" }}>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: "#fff", display: "block", transform: "rotate(-5deg)" }}>
                        I&apos;m
                    </span>
                </div>

                {/* Left Middle - ELGY with pink blob */}
                <div style={{ position: "absolute", left: "2%", top: "35%", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0.9)", transition: "all 0.8s ease-out 0.1s" }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        {/* Pink blob background */}
                        <div style={{ position: "absolute", inset: "-20px -25px", background: "#e91e8c", borderRadius: "35px", transform: "rotate(-3deg)", zIndex: -1 }} />
                        <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(5rem, 11vw, 9rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, display: "block" }}>
                            ELGY
                        </span>
                    </div>
                </div>

                {/* Bottom Left - Porto */}
                <div style={{ position: "absolute", left: "5%", bottom: "25%", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease-out 0.2s" }}>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#fff", display: "block", transform: "rotate(3deg)" }}>
                        Porto
                    </span>
                </div>

                {/* Center - Photo */}
                <div style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", zIndex: 15, opacity: mounted ? 1 : 0, transition: "opacity 1s ease-out 0.3s" }}>
                    <div style={{ position: "relative", width: "clamp(480px, 52vw, 800px)", height: "clamp(580px, 82vh, 980px)" }}>
                        {/* White outline */}
                        <div style={{ position: "absolute", inset: "-15px", background: "#fff", borderRadius: "50% 50% 0 0", transform: "scale(1.02)" }} />
                        <Image 
                            src="/elgy-cutout.png" 
                            alt="Elgy Sundari" 
                            fill 
                            style={{ objectFit: "contain", objectPosition: "center bottom", filter: "grayscale(100%) contrast(1.1)" }} 
                            priority 
                        />
                    </div>
                </div>

                {/* Top Right - Sundari */}
                <div style={{ position: "absolute", right: "3%", top: "22%", textAlign: "right", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(-20px)", transition: "all 0.8s ease-out 0.15s" }}>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: "#1e3a5f", display: "block", transform: "rotate(4deg)" }}>
                        Sundari
                    </span>
                </div>

                {/* Right Middle - Big text effect */}
                <div style={{ position: "absolute", right: "2%", top: "38%", textAlign: "right", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0.9)", transition: "all 0.8s ease-out 0.2s" }}>
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 800, color: "#1e3a5f", letterSpacing: "-0.02em", lineHeight: 1, display: "block", opacity: 0.15 }}>
                        UI/UX
                    </span>
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 800, color: "#1e3a5f", letterSpacing: "-0.02em", lineHeight: 1, display: "block", opacity: 0.15, marginTop: "-10px" }}>
                        Designer
                    </span>
                </div>

                {/* Bottom Right - CTA */}
                <div style={{ position: "absolute", right: "5%", bottom: "20%", textAlign: "right", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease-out 0.25s" }}>
                    <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                        style={{ display: "inline-block", padding: "18px 45px", background: "#e91e8c", color: "#fff", borderRadius: "50px", fontWeight: 700, fontSize: "1.05rem", transition: "all 0.3s", boxShadow: "0 6px 25px rgba(233, 30, 140, 0.4)", transform: "rotate(-2deg)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.05) rotate(0deg)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(233, 30, 140, 0.5)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1) rotate(-2deg)"; e.currentTarget.style.boxShadow = "0 6px 25px rgba(233, 30, 140, 0.4)"; }}>
                        About Me ✨
                    </a>
                </div>
            </div>
        </section>
    );
}
