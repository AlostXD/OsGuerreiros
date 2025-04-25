"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrollWrapperProps {
    children: React.ReactNode[];
}

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Estado para verificar se é um dispositivo móvel
    const touchStartY = useRef<number | null>(null);

    const handleScroll = (event: WheelEvent) => {
        if (isScrolling || isMobile) return; // Desativa o scroll personalizado em dispositivos móveis

        setIsScrolling(true);

        if (event.deltaY > 0 && currentIndex < children.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (event.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => setIsScrolling(false), 1000);
    };

    const handleTouchStart = (event: TouchEvent) => {
        if (isMobile) return; // Desativa o comportamento de toque em dispositivos móveis
        touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
        if (isScrolling || touchStartY.current === null || isMobile) return;

        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY.current - touchEndY;

        setIsScrolling(true);

        if (deltaY > 50 && currentIndex < children.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (deltaY < -50 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => setIsScrolling(false), 1000);
        touchStartY.current = null;
    };

    useEffect(() => {
        // Verifica se a tela é pequena (exemplo: largura menor que 768px)
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        if (!isMobile) {
            window.addEventListener("wheel", handleScroll, { passive: false });
            window.addEventListener("touchstart", handleTouchStart, { passive: false });
            window.addEventListener("touchmove", handleTouchMove, { passive: false });
        }

        return () => {
            window.removeEventListener("resize", checkIfMobile);
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [currentIndex, isScrolling, isMobile]);

    if (isMobile) {
        // Retorna os filhos normalmente sem lógica de scroll em dispositivos móveis
        return <div>{children}</div>;
    }

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
                    <div key={index} className="min-h-screen w-screen">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
