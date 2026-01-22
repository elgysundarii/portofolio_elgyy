"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Simple elegant floating items 
const floatingItems = [
    { text: "✨", size: "1.5rem", color: "#FFD700" },
    { text: "🌸", size: "1.8rem", color: "#FFD700" },
    { text: "🦋", size: "1.2rem", color: "#FFD700" },
    { text: "✨", size: "1.4rem", color: "#FFD700" },
    { text: "🌸", size: "1.6rem", color: "#FFD700" },
    { text: "🦋", size: "1.3rem", color: "#FFD700" },
    { text: "✨", size: "1.5rem", color: "#FFD700" },
    { text: "🌸", size: "1.7rem", color: "#FFD700" },
    { text: "🦋", size: "1.4rem", color: "#FFD700" },
    { text: "✨", size: "1.6rem", color: "#FFD700" },
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [randomPositions, setRandomPositions] = useState<Array<{top: string, left: string, delay: number, rotation: number}>>([]);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => { 
        setMounted(true);
        
        // Generate random positions untuk floating items
        const positions = floatingItems.map(() => ({
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            delay: Math.random() * 2,
            rotation: Math.random() * 360,
        }));
        setRandomPositions(positions);

        // Scroll parallax effect
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Parallax transforms based on scroll
    const parallax = (speed: number) => `translateY(${scrollY * speed}px)`;
    const parallaxRotate = (speed: number, baseRotate: number) => `translateY(${scrollY * speed}px) rotate(${baseRotate + scrollY * 0.05}deg)`;

    return (
        <section ref={heroRef} id="hero" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: "#1e3a5f" }}>
            
            {/* Curved white shape with parallax */}
            <div style={{ position: "absolute", top: 0, left: "25%", right: 0, bottom: 0, background: "#fff", borderRadius: "0 0 0 50%", transform: `scaleX(1.5) ${parallax(-0.1)}`, transformOrigin: "right" }} />
            
            {/* Decorative shapes - more subtle and organized */}
            <div style={{ position: "absolute", top: "10%", right: "10%", width: "300px", height: "300px", background: "rgba(233, 30, 140, 0.05)", borderRadius: "50%", filter: "blur(40px)", transform: parallax(-0.1) }} />
            <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "250px", height: "250px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "50%", filter: "blur(30px)", transform: parallax(-0.15) }} />

            {/* Elegant floating items - very low opacity */}
            <div style={{ position: "absolute", top: "25%", left: "10%", fontSize: "1.5rem", opacity: 0.1, animation: "floatSlow 8s ease-in-out infinite", transform: parallax(-0.1) }}>✨</div>
            <div style={{ position: "absolute", bottom: "20%", right: "8%", fontSize: "1.8rem", opacity: 0.1, animation: "floatSlow 10s ease-in-out infinite 1s", transform: parallax(-0.12) }}>🌸</div>

            <div style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 60px", maxWidth: "1700px", margin: "0 auto" }}>
                
                {/* Left Side - Name combined */}
                <div style={{ position: "absolute", left: "3%", top: "28%", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? `translateY(0) ${parallax(-0.05)}` : "translateY(-20px)", transition: "all 0.8s ease-out" }}>
                    {/* I'm */}
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#fff", display: "block", transform: "rotate(-3deg)", marginBottom: "5px", animation: "wiggle 3s ease-in-out infinite" }}>
                        I&apos;m
                    </span>
                    
                    {/* ELGY SUNDARI - pink text, no card */}
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800, color: "#e91e8c", letterSpacing: "-0.03em", lineHeight: 1, display: "block", textShadow: "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0 4px 20px rgba(233, 30, 140, 0.3)" }}>
                            ELGY
                        </span>
                        <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800, color: "#e91e8c", letterSpacing: "-0.03em", lineHeight: 1, display: "block", marginTop: "-3px", textShadow: "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0 4px 20px rgba(233, 30, 140, 0.3)" }}>
                            SUNDARI
                        </span>
                    </div>
                </div>

                {/* Bottom Left - Porto with bounce - now with pink background */}
                <div style={{ position: "absolute", left: "5%", bottom: "18%", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? `translateX(0) ${parallax(-0.12)}` : "translateX(-30px)", transition: "all 0.8s ease-out 0.2s" }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <div style={{ position: "absolute", inset: "-12px -18px", background: "rgba(255,255,255,0.95)", borderRadius: "20px", transform: "rotate(3deg)", zIndex: -1, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }} />
                        <span style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#e91e8c", display: "block", transform: "rotate(3deg)", animation: "bounce 2s ease-in-out infinite" }}>
                            Porto ✨
                        </span>
                    </div>
                </div>

                {/* Center - Photo with hover effect */}
                <div style={{ position: "absolute", left: "50%", bottom: 0, transform: `translateX(-50%) ${parallax(-0.02)}`, zIndex: 15, opacity: mounted ? 1 : 0, transition: "opacity 1s ease-out 0.3s" }}>
                    <div style={{ position: "relative", width: "clamp(480px, 50vw, 750px)", height: "clamp(580px, 80vh, 900px)" }}>
                        {/* White outline with glow */}
                        <div style={{ position: "absolute", inset: "5% -10px -0px -10px", background: "#fff", borderRadius: "50% 50% 0 0", boxShadow: "0 0 80px rgba(233, 30, 140, 0.25)" }} />
                        <Image 
                            src="/elgyhero.png" 
                            alt="Elgy Sundari" 
                            fill 
                            style={{ objectFit: "contain", objectPosition: "center bottom" }} 
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 80vw, 50vw"
                        />
                        {/* Sparkle overlay */}
                        <div style={{ position: "absolute", top: "8%", right: "12%", fontSize: "2.5rem", animation: "sparkle 2s ease-in-out infinite" }}>✨</div>
                        <div style={{ position: "absolute", top: "20%", left: "18%", fontSize: "2rem", animation: "sparkle 2.5s ease-in-out infinite 0.5s" }}>⭐</div>
                        <div style={{ position: "absolute", top: "35%", right: "8%", fontSize: "1.8rem", animation: "sparkle 3s ease-in-out infinite 1s" }}>🌸</div>
                    </div>
                </div>

                {/* Right Middle - Cute decorative text */}
                <div style={{ position: "absolute", right: "5%", top: "35%", textAlign: "right", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? `scale(1) ${parallax(-0.08)}` : "scale(0.9)", transition: "all 0.8s ease-out 0.2s" }}>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, color: "#e91e8c", display: "block", animation: "wiggle 4s ease-in-out infinite" }}>
                        Welcome to my
                    </span>
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#1e3a5f", letterSpacing: "-0.02em", lineHeight: 1.2, display: "block", opacity: 0.8 }}>
                        Creative Space ✿
                    </span>
                </div>

                {/* Bottom Right - CTA with rainbow hover */}
                <div style={{ position: "absolute", right: "5%", bottom: "20%", textAlign: "right", zIndex: 20, opacity: mounted ? 1 : 0, transform: mounted ? `translateX(0) ${parallax(-0.05)}` : "translateX(30px)", transition: "all 0.8s ease-out 0.25s" }}>
                    <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                        style={{ display: "inline-block", padding: "18px 45px", background: "linear-gradient(135deg, #e91e8c, #ff6b9d)", color: "#fff", borderRadius: "50px", fontWeight: 700, fontSize: "1.05rem", transition: "all 0.3s", boxShadow: "0 6px 25px rgba(233, 30, 140, 0.4)", transform: "rotate(-2deg)", animation: "glow 2s ease-in-out infinite" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.05) rotate(0deg)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(233, 30, 140, 0.6)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1) rotate(-2deg)"; e.currentTarget.style.boxShadow = "0 6px 25px rgba(233, 30, 140, 0.4)"; }}>
                        About Me 💖
                    </a>
                </div>

                {/* Scroll indicator - cute bouncing arrow */}
                <div style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)", zIndex: 20, opacity: mounted ? 0.8 : 0, transition: "opacity 1s ease-out 1s" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", animation: "scrollBounce 2s ease-in-out infinite" }}>
                        <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem", color: "#1e3a5f", marginBottom: "5px" }}>scroll down</span>
                        <span style={{ fontSize: "1.5rem" }}>🐰</span>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(10deg); }
                }
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.1); opacity: 0.6; }
                }
                @keyframes scrollBounce {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(10px); }
                }
            `}</style>
        </section>
    );
}

