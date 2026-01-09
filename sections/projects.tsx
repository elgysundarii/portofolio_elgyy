"use client";

import ScrollAnimate from "@/components/ScrollAnimate";

const projects = [
    { 
        title: "Internal Management App", 
        role: "Project Manager & UI/UX Designer", 
        desc: "Led design and project management for an internal company management system.",
        tags: ["Figma", "Jira", "SRS"],
        year: "2025",
        color: "#e91e8c"
    },
    { 
        title: "SMKAA Website", 
        role: "UI/UX Designer & QA Engineer", 
        desc: "Designed the interface and ensured quality through comprehensive testing.",
        tags: ["UI/UX", "Testing", "QA"],
        year: "2025",
        color: "#1e3a5f"
    },
    { 
        title: "Website Programming", 
        role: "UI/UX Designer & QA", 
        desc: "Created intuitive designs and performed quality assurance testing.",
        tags: ["Figma", "QA"],
        year: "2025",
        color: "#e91e8c"
    },
    { 
        title: "RemindUs App", 
        role: "Developer", 
        desc: "Built a reminder application using Python for task management.",
        tags: ["Python"],
        year: "2024",
        color: "#1e3a5f"
    },
];

export default function Projects() {
    return (
        <section id="projects" style={{ padding: "120px 60px", position: "relative", background: "#fff" }}>
            
            {/* Decorative */}
            <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "250px", height: "250px", border: "40px solid rgba(30, 58, 95, 0.05)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: "15%", right: "-3%", width: "150px", height: "150px", border: "25px solid rgba(233, 30, 140, 0.08)", borderRadius: "50%" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
                        <div>
                            <span style={{ display: "inline-block", padding: "10px 24px", background: "#1e3a5f", color: "#fff", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 500, marginBottom: "20px" }}>
                                My Projects
                            </span>
                            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "#1e3a5f", lineHeight: 1.2 }}>
                                Featured Work
                            </h2>
                        </div>
                        <a href="https://github.com" target="_blank" style={{ padding: "14px 28px", background: "#e91e8c", color: "#fff", borderRadius: "50px", fontWeight: 600, fontSize: "0.95rem", transition: "all 0.3s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(233, 30, 140, 0.4)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                            View All →
                        </a>
                    </div>
                </ScrollAnimate>

                {/* Projects grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="projects-grid">
                    {projects.map((p, i) => (
                        <ScrollAnimate key={i} animation="fadeUp" delay={i * 0.1}>
                            <div style={{ background: "#f8f9fa", borderRadius: "24px", padding: "36px", border: "2px solid transparent", transition: "all 0.3s", cursor: "pointer" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${p.color}20`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                                
                                {/* Year badge */}
                                <span style={{ display: "inline-block", padding: "6px 14px", background: p.color, color: "#fff", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 500, marginBottom: "20px" }}>
                                    {p.year}
                                </span>

                                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#1e3a5f", marginBottom: "8px" }}>{p.title}</h3>
                                <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600, marginBottom: "12px", background: p.color, display: "inline-block", padding: "4px 12px", borderRadius: "20px" }}>{p.role}</p>
                                <p style={{ color: "#5a6a7a", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px" }}>{p.desc}</p>

                                {/* Tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {p.tags.map((tag, j) => (
                                        <span key={j} style={{ padding: "6px 14px", background: "#fff", border: `1px solid ${p.color}30`, borderRadius: "50px", fontSize: "0.8rem", color: p.color }}>
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
