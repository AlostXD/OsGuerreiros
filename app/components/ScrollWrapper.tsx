"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrollWrapperProps {
    children: React.ReactNode[];
}

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isScrolling = useRef(false); // Usar useRef para evitar re-renderizações desnecessárias

    const handleScroll = (event: WheelEvent) => {
        if (isScrolling.current) return;

        isScrolling.current = true;

        if (event.deltaY > 0 && currentIndex < children.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (event.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => {
            isScrolling.current = false; // Desbloqueia a rolagem após 1 segundo
        }, 1000);
    };

    useEffect(() => {
        const preventDefault = (e: WheelEvent) => e.preventDefault(); // Previne o comportamento padrão da rolagem
        window.addEventListener("wheel", handleScroll, { passive: false });
        window.addEventListener("wheel", preventDefault, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("wheel", preventDefault);
        };
    }, [currentIndex]);

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
