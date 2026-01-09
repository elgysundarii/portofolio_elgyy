"use client";

export default function Navbar() {
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
        <nav style={{ position: "fixed", top: "30px", left: 0, right: 0, zIndex: 100, padding: "0 60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            
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
