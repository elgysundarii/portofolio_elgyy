"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > window.innerHeight - 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!scrolled) return null;

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
            padding: "14px 50px",
            background: "rgba(7, 26, 31, 0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(13, 148, 136, 0.1)",
            opacity: scrolled ? 1 : 0,
            transform: scrolled ? "translateY(0)" : "translateY(-100%)",
            transition: "all 0.3s ease",
        }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a href="#hero" onClick={(e) => { e.preventDefault(); document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }); }}
                    style={{ fontSize: "1.3rem", fontWeight: 800, color: "#f8fafc", cursor: "pointer" }}>
                    E<span style={{ color: "#14b8a6" }}>.</span>
                </a>
                <div style={{ display: "flex", gap: "8px" }}>
                    {[{ name: "About", href: "#about" }, { name: "Skills", href: "#skills" }, { name: "Work", href: "#projects" }, { name: "Contact", href: "#contact" }].map((item, i) => (
                        <a key={item.name} href={item.href} onClick={(e) => { e.preventDefault(); document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }); }}
                            style={{ padding: "10px 20px", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 500, color: "rgba(248, 250, 252, 0.8)", background: "rgba(13, 148, 136, 0.1)", border: "1px solid transparent", transition: "all 0.3s", cursor: "pointer" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = i % 2 === 0 ? "#14b8a6" : "#ec4899"; e.currentTarget.style.color = "#f8fafc"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.color = "rgba(248, 250, 252, 0.8)"; }}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
