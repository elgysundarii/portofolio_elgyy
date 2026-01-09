"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
    children: ReactNode;
    animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn" | "scale" | "rotate";
    delay?: number;
    duration?: number;
    threshold?: number;
}

export default function ScrollAnimate({
    children,
    animation = "fadeUp",
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
}: ScrollAnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    const animations = {
        fadeUp: {
            hidden: { opacity: 0, transform: "translateY(60px)" },
            visible: { opacity: 1, transform: "translateY(0)" },
        },
        fadeLeft: {
            hidden: { opacity: 0, transform: "translateX(-60px)" },
            visible: { opacity: 1, transform: "translateX(0)" },
        },
        fadeRight: {
            hidden: { opacity: 0, transform: "translateX(60px)" },
            visible: { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        scale: {
            hidden: { opacity: 0, transform: "scale(0.8)" },
            visible: { opacity: 1, transform: "scale(1)" },
        },
        rotate: {
            hidden: { opacity: 0, transform: "rotate(-10deg) scale(0.9)" },
            visible: { opacity: 1, transform: "rotate(0) scale(1)" },
        },
    };

    const currentAnimation = animations[animation];
    const style = isVisible ? currentAnimation.visible : currentAnimation.hidden;

    return (
        <div
            ref={ref}
            style={{
                ...style,
                transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}
