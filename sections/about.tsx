"use client";

import ScrollAnimate from "@/components/ScrollAnimate";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" style={{ padding: "120px 60px", position: "relative", background: "#fff" }}>
            
            {/* Decorative circle */}
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "300px", height: "300px", border: "40px solid rgba(30, 58, 95, 0.05)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "20%", left: "-3%", width: "150px", height: "150px", border: "25px solid rgba(233, 30, 140, 0.08)", borderRadius: "50%" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }} className="about-grid">
                    
                    {/* Left - Photo */}
                    <ScrollAnimate animation="fadeLeft">
                        <div style={{ position: "relative" }}>
                            <div style={{ background: "#1e3a5f", borderRadius: "30px", padding: "20px", position: "relative" }}>
                                <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "20px", overflow: "hidden", position: "relative" }}>
                                    <Image src="/elgy-photo.png" alt="Elgy" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                                </div>
                            </div>
                            
                            {/* Floating badge */}
                            <div style={{ position: "absolute", bottom: "-20px", right: "-20px", padding: "16px 28px", background: "#e91e8c", borderRadius: "50px", fontWeight: 600, color: "#fff", fontSize: "0.95rem", boxShadow: "0 8px 25px rgba(233, 30, 140, 0.3)" }}>
                                Open to Work ✨
                            </div>
                        </div>
                    </ScrollAnimate>

                    {/* Right - Content */}
                    <div>
                        <ScrollAnimate animation="fadeUp">
                            <span style={{ display: "inline-block", padding: "10px 24px", background: "#1e3a5f", color: "#fff", borderRadius: "50px", fontSize: "0.9rem", fontWeight: 500, marginBottom: "24px" }}>
                                About Me
                            </span>
                        </ScrollAnimate>

                        <ScrollAnimate animation="fadeUp" delay={0.1}>
                            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "#1e3a5f", marginBottom: "24px", lineHeight: 1.2 }}>
                                Elgy Sundari
                            </h2>
                        </ScrollAnimate>

                        <ScrollAnimate animation="fadeUp" delay={0.2}>
                            <p style={{ fontSize: "1.1rem", color: "#5a6a7a", lineHeight: 1.9, marginBottom: "20px" }}>
                                Hi! I&apos;m a <span style={{ color: "#1e3a5f", fontWeight: 700 }}>Software Engineering student</span> at Universitas Pendidikan Indonesia with a passion for creating beautiful and functional digital experiences.
                            </p>
                            <p style={{ fontSize: "1.1rem", color: "#5a6a7a", lineHeight: 1.9, marginBottom: "32px" }}>
                                I specialize in <span style={{ color: "#e91e8c", fontWeight: 700 }}>UI/UX Design</span> and <span style={{ color: "#1e3a5f", fontWeight: 700 }}>Quality Assurance</span>. I believe great design is about solving problems while making things beautiful.
                            </p>
                        </ScrollAnimate>

                        {/* Stats */}
                        <ScrollAnimate animation="fadeUp" delay={0.3}>
                            <div style={{ display: "flex", gap: "40px" }}>
                                {[
                                    { num: "3+", label: "Projects", color: "#1e3a5f" },
                                    { num: "2+", label: "Years Exp", color: "#e91e8c" },
                                    { num: "100%", label: "Dedication", color: "#1e3a5f" },
                                ].map((s, i) => (
                                    <div key={i}>
                                        <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "2.5rem", fontWeight: 700, color: s.color }}>{s.num}</p>
                                        <p style={{ color: "#5a6a7a", fontSize: "0.9rem" }}>{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>

            <style jsx>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 50px !important; } }`}</style>
        </section>
    );
}
