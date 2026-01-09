"use client";

import ScrollAnimate from "@/components/ScrollAnimate";

const ToolIcon = ({ name, color }: { name: string; color: string }) => (
    <div style={{ padding: "14px 20px", background: "rgba(13, 148, 136, 0.08)", border: "1px solid rgba(13, 148, 136, 0.15)", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 500, color: "rgba(248, 250, 252, 0.9)", transition: "all 0.3s", cursor: "default" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}15`; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.15)"; e.currentTarget.style.background = "rgba(13, 148, 136, 0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
        {name}
    </div>
);

export default function Skills() {
    const categories = [
        { title: "Design", icon: "🎨", color: "#ec4899", skills: ["Figma", "UI Design", "Prototyping", "Wireframing"] },
        { title: "Development", icon: "💻", color: "#14b8a6", skills: ["HTML/CSS", "Python", "C++", "JavaScript"] },
        { title: "QA & Testing", icon: "🔍", color: "#fbbf24", skills: ["Manual Testing", "Test Planning", "Bug Reporting", "Documentation"] },
    ];

    const tools = ["Figma", "VS Code", "Git", "GitHub", "Jira", "Python", "MySQL", "HTML", "CSS"];

    return (
        <section id="skills" style={{ padding: "120px 50px", maxWidth: "1400px", margin: "0 auto", position: "relative" }}>

            {/* Background accent */}
            <div style={{ position: "absolute", top: "30%", left: "-15%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <span style={{ color: "#14b8a6", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Skills</span>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, marginTop: "16px" }}>
                            What I <span style={{ background: "linear-gradient(90deg, #14b8a6, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>bring</span>
                        </h2>
                    </div>
                </ScrollAnimate>

                {/* Skill categories */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "60px" }} className="skills-grid">
                    {categories.map((cat, i) => (
                        <ScrollAnimate key={i} animation="fadeUp" delay={i * 0.1}>
                            <div style={{ background: "rgba(13, 148, 136, 0.05)", border: "1px solid rgba(13, 148, 136, 0.15)", borderRadius: "24px", padding: "32px", transition: "all 0.4s", height: "100%" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.transform = "translateY(-8px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(13, 148, 136, 0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}>

                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                                    <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
                                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>{cat.title}</h3>
                                </div>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {cat.skills.map((skill, j) => (
                                        <span key={j} style={{ padding: "8px 16px", background: `${cat.color}15`, border: `1px solid ${cat.color}30`, borderRadius: "20px", fontSize: "0.85rem", color: cat.color, fontWeight: 500 }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimate>
                    ))}
                </div>

                {/* Tools */}
                <ScrollAnimate animation="fadeUp" delay={0.3}>
                    <div style={{ background: "rgba(13, 148, 136, 0.05)", border: "1px solid rgba(13, 148, 136, 0.1)", borderRadius: "24px", padding: "40px", textAlign: "center" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "24px" }}>Tools I Use</h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                            {tools.map((tool, i) => (
                                <ToolIcon key={i} name={tool} color={i % 2 === 0 ? "#14b8a6" : "#ec4899"} />
                            ))}
                        </div>
                    </div>
                </ScrollAnimate>
            </div>

            <style jsx>{`@media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}
