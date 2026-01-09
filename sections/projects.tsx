"use client";

import ScrollAnimate from "@/components/ScrollAnimate";

export default function Projects() {
    const projects = [
        { title: "Internal Management App", role: "Project Manager & UI/UX Designer", period: "2025", tags: ["Figma", "Jira", "SRS"], color: "#14b8a6", icon: "📱" },
        { title: "SMKAA Website", role: "UI/UX Designer & QA", period: "2025", tags: ["UI/UX", "Testing", "QA"], color: "#ec4899", icon: "🌐" },
        { title: "Website Programming", role: "UI/UX Designer & QA", period: "2025", tags: ["Figma", "QA"], color: "#fbbf24", icon: "💻" },
        { title: "RemindUs App", role: "Developer", period: "Project", tags: ["Python"], color: "#14b8a6", icon: "⏰" },
    ];

    return (
        <section id="projects" style={{ padding: "120px 50px", maxWidth: "1400px", margin: "0 auto", position: "relative" }}>

            {/* Background accent */}
            <div style={{ position: "absolute", bottom: "20%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
                        <div>
                            <span style={{ color: "#ec4899", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Portfolio</span>
                            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, marginTop: "16px" }}>
                                Featured <span style={{ background: "linear-gradient(90deg, #14b8a6, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work</span>
                            </h2>
                        </div>
                        <a href="https://github.com" target="_blank" style={{ padding: "14px 28px", background: "transparent", border: "1px solid rgba(13, 148, 136, 0.3)", borderRadius: "50px", color: "#14b8a6", fontWeight: 600, transition: "all 0.3s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13, 148, 136, 0.1)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                            View All →
                        </a>
                    </div>
                </ScrollAnimate>

                {/* Projects grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="projects-grid">
                    {projects.map((p, i) => (
                        <ScrollAnimate key={i} animation="fadeUp" delay={i * 0.1}>
                            <div style={{ background: "rgba(13, 148, 136, 0.05)", border: "1px solid rgba(13, 148, 136, 0.1)", borderRadius: "24px", padding: "32px", transition: "all 0.4s", cursor: "pointer" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 60px ${p.color}20`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.1)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "20px" }}>
                                    <span style={{ fontSize: "3rem" }}>{p.icon}</span>
                                    <span style={{ padding: "6px 14px", background: `${p.color}20`, borderRadius: "20px", fontSize: "0.75rem", color: p.color, fontWeight: 600 }}>{p.period}</span>
                                </div>

                                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "8px" }}>{p.title}</h3>
                                <p style={{ color: "rgba(248, 250, 252, 0.6)", fontSize: "0.95rem", marginBottom: "20px" }}>{p.role}</p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {p.tags.map((tag, j) => (
                                        <span key={j} style={{ padding: "6px 14px", background: "rgba(248, 250, 252, 0.05)", border: "1px solid rgba(248, 250, 252, 0.1)", borderRadius: "8px", fontSize: "0.8rem", color: "rgba(248, 250, 252, 0.7)" }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimate>
                    ))}
                </div>
            </div>

            <style jsx>{`@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}
