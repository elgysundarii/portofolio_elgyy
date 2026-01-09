"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "About Me", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 100, 
            padding: scrolled ? "15px 60px" : "25px 60px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "0 2px 20px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
        }}>
            
            {/* Left - Home button */}
            <a href="#hero" onClick={(e) => handleClick(e, "#hero")}
                style={{ padding: "12px 28px", background: "#e91e8c", color: "#fff", borderRadius: "50px", fontWeight: 600, fontSize: "0.95rem", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(233, 30, 140, 0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                Home
            </a>

            {/* Right - Nav items */}
            <div style={{ display: "flex", gap: "12px" }}>
                {navItems.map((item, i) => (
                    <a key={i} href={item.href} onClick={(e) => handleClick(e, item.href)}
                        style={{ padding: "12px 24px", background: "transparent", border: "2px solid #1e3a5f", color: "#1e3a5f", borderRadius: "50px", fontWeight: 500, fontSize: "0.9rem", transition: "all 0.3s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#1e3a5f"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1e3a5f"; }}>
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
