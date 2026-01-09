"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import Image from "next/image";

export default function About() {
    const highlights = [
        { icon: "🎨", title: "Design", desc: "Pixel-perfect UI" },
        { icon: "🔍", title: "Quality", desc: "Bug-free products" },
        { icon: "💻", title: "Code", desc: "Clean & efficient" },
    ];

    return (
        <section id="about" style={{ padding: "120px 50px", maxWidth: "1400px", margin: "0 auto", position: "relative" }}>

            {/* Background accent */}
            <div style={{ position: "absolute", top: "50%", right: "-20%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center", position: "relative", zIndex: 1 }} className="about-grid">

                {/* Left - Visual */}
                <ScrollAnimate animation="fadeLeft">
                    <div style={{ position: "relative" }}>
                        {/* Main photo card */}
                        <div style={{ position: "relative", background: "linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(13, 148, 136, 0.2)" }}>
                            <div style={{ width: "200px", height: "200px", borderRadius: "24px", overflow: "hidden", margin: "0 auto", position: "relative", border: "3px solid rgba(13, 148, 136, 0.3)" }}>
                                <Image src="/elgy-photo.png" alt="Elgy" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                            </div>

                            <div style={{ textAlign: "center", marginTop: "24px" }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "4px" }}>Elgy Sundari</h3>
                                <p style={{ color: "#14b8a6", fontSize: "0.95rem" }}>Software Engineering @ UPI</p>
                            </div>

                            {/* Highlight cards */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "28px" }}>
                                {highlights.map((h, i) => (
                                    <div key={i} style={{ padding: "16px 12px", background: "rgba(7, 26, 31, 0.6)", borderRadius: "16px", textAlign: "center", transition: "all 0.3s" }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(13, 148, 136, 0.15)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(7, 26, 31, 0.6)"; }}>
                                        <span style={{ fontSize: "1.5rem" }}>{h.icon}</span>
                                        <p style={{ fontSize: "0.85rem", fontWeight: 600, marginTop: "8px" }}>{h.title}</p>
                                        <p style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.5)", marginTop: "2px" }}>{h.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating accent */}
                        <div style={{ position: "absolute", top: "-20px", right: "-20px", padding: "12px 20px", background: "linear-gradient(135deg, #ec4899, #f472b6)", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 600, color: "white", boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)" }}>
                            Open to work ✨
                        </div>
                    </div>
                </ScrollAnimate>

                {/* Right - Content */}
                <div>
                    <ScrollAnimate animation="fadeUp">
                        <span style={{ color: "#14b8a6", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>About Me</span>
                    </ScrollAnimate>

                    <ScrollAnimate animation="fadeUp" delay={0.1}>
                        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, marginTop: "16px", marginBottom: "24px", lineHeight: 1.2 }}>
                            Turning ideas into<br />
                            <span style={{ background: "linear-gradient(90deg, #14b8a6, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>digital reality</span>
                        </h2>
                    </ScrollAnimate>

                    <ScrollAnimate animation="fadeUp" delay={0.2}>
                        <p style={{ fontSize: "1.1rem", color: "rgba(248, 250, 252, 0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
                            I'm a <span style={{ color: "#14b8a6", fontWeight: 600 }}>Software Engineering student</span> at Universitas Pendidikan Indonesia, passionate about creating beautiful interfaces and ensuring everything works flawlessly.
                        </p>
                        <p style={{ fontSize: "1.1rem", color: "rgba(248, 250, 252, 0.7)", lineHeight: 1.8, marginBottom: "32px" }}>
                            With experience in <span style={{ color: "#ec4899", fontWeight: 600 }}>UI/UX design</span> and <span style={{ color: "#14b8a6", fontWeight: 600 }}>quality assurance</span>, I bring a unique perspective to every project.
                        </p>
                    </ScrollAnimate>

                    {/* Stats */}
                    <ScrollAnimate animation="fadeUp" delay={0.3}>
                        <div style={{ display: "flex", gap: "32px" }}>
                            {[
                                { num: "3+", label: "Projects" },
                                { num: "2+", label: "Years Exp" },
                                { num: "100%", label: "Dedication" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <p style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #14b8a6, #0d9488)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</p>
                                    <p style={{ fontSize: "0.9rem", color: "rgba(248, 250, 252, 0.5)", marginTop: "4px" }}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimate>
                </div>
            </div>

            <style jsx>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; } }`}</style>
        </section>
    );
}
