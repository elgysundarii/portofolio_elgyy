"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import { useEffect, useState } from "react";

const tools = [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "ClickUp", logo: "" },
    { name: "Apidog", logo: "" },
];

const skills = [
    { title: "Design", color: "#e91e8c", items: ["UI Design", "UX Research", "Prototyping", "Wireframing", "Design Systems"] },
    { title: "Development", color: "#fff", items: ["HTML/CSS", "Python", "JavaScript", "C++", "SQL"] },
    { title: "QA & Testing", color: "#e91e8c", items: ["Manual Testing", "Test Planning", "Bug Tracking", "API Testing", "Documentation"] },
];

export default function Skills() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills" style={{ padding: "120px 60px", position: "relative", background: "#1e3a5f", overflow: "hidden" }}>
            
            {/* Decorative with parallax */}
            <div style={{ position: "absolute", top: "20%", right: "5%", width: "200px", height: "200px", border: "30px solid rgba(255,255,255,0.05)", borderRadius: "50%", transform: `translateY(${(scrollY - 1000) * 0.08}px) rotate(${scrollY * 0.015}deg)`, transition: "transform 0.1s ease-out", animation: "spin 20s linear infinite" }} />
            <div style={{ position: "absolute", bottom: "15%", left: "8%", width: "120px", height: "120px", border: "20px solid rgba(233, 30, 140, 0.1)", borderRadius: "50%", transform: `translateY(${(scrollY - 1000) * -0.05}px)`, transition: "transform 0.1s ease-out", animation: "pulse 4s ease-in-out infinite" }} />
            
            {/* Floating sparkles */}
            <div style={{ position: "absolute", top: "10%", left: "15%", fontSize: "2rem", opacity: 0.3, animation: "twinkle 3s ease-in-out infinite" }}>⭐</div>
            <div style={{ position: "absolute", bottom: "30%", right: "10%", fontSize: "1.8rem", opacity: 0.25, animation: "twinkle 4s ease-in-out infinite 0.5s" }}>✨</div>
            <div style={{ position: "absolute", top: "50%", left: "3%", fontSize: "1.5rem", opacity: 0.2, animation: "twinkle 5s ease-in-out infinite 1s" }}>💫</div>
            <div style={{ position: "absolute", top: "70%", right: "20%", fontSize: "1.6rem", opacity: 0.25, animation: "twinkle 3.5s ease-in-out infinite 1.5s" }}>🌟</div>

            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            `}</style>

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                
                {/* Header */}
                <ScrollAnimate animation="fadeUp">
                    <div style={{ marginBottom: "60px" }}>
                        <span style={{ display: "inline-block", padding: "10px 24px", background: "#e91e8c", color: "#fff", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 600, marginBottom: "20px" }}>
                            Skills & Tools
                        </span>
                        <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                            What I Do Best
                        </h2>
                    </div>
                </ScrollAnimate>

                {/* Skills grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "60px" }} className="skills-grid">
                    {skills.map((skill, i) => (
                        <ScrollAnimate key={i} animation="fadeUp" delay={i * 0.1}>
                            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "24px", padding: "32px", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                
                                <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>{skill.title}</h3>
                                
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                    {skill.items.map((item, j) => (
                                        <span key={j} style={{ padding: "8px 16px", background: skill.color === "#e91e8c" ? "rgba(233, 30, 140, 0.2)" : "rgba(255,255,255,0.1)", borderRadius: "50px", fontSize: "0.85rem", color: skill.color, fontWeight: 500 }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimate>
                    ))}
                </div>

                {/* Tools */}
                <ScrollAnimate animation="fadeUp" delay={0.3}>
                    <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "24px", padding: "40px", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: "28px", textAlign: "center", textTransform: "uppercase", letterSpacing: "2px" }}>Tools I Use</h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
                            {tools.map((tool, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 20px", background: "rgba(255,255,255,0.08)", borderRadius: "50px", transition: "all 0.3s" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "#e91e8c"; e.currentTarget.style.transform = "translateY(-2px)"; const span = e.currentTarget.querySelector("span") as HTMLElement; if(span) span.style.color = "#fff"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; const span = e.currentTarget.querySelector("span") as HTMLElement; if(span) span.style.color = "#fff"; }}>
                                    {tool.logo ? (
                                        <img src={tool.logo} alt={tool.name} style={{ width: "20px", height: "20px" }} />
                                    ) : (
                                        <div style={{ width: "20px", height: "20px", background: "#e91e8c", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 700, color: "#fff" }}>
                                            {tool.name.charAt(0)}
                                        </div>
                                    )}
                                    <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: 500, transition: "color 0.3s" }}>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimate>
            </div>

            <style jsx>{`@media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}
