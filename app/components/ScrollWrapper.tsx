"use client";

import React, { useState, useEffect } from "react";

interface ScrollWrapperProps {
    children: React.ReactNode[];
}

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = (event: WheelEvent) => {
        if (isScrolling) return;

        setIsScrolling(true);

        if (event.deltaY > 0 && currentIndex < children.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (event.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => setIsScrolling(false), 1000); // Bloqueia a rolagem por 1 segundo
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [currentIndex, isScrolling]);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    transform: `translateY(-${currentIndex * 100}vh)`,
                    transition: "transform 0.8s ease-in-out",
                }}
            >
                {children.map((child, index) => (
                    <div key={index} className="h-screen w-screen">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
