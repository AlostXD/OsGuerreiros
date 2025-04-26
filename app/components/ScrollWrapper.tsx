"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrollWrapperProps {
    children: React.ReactNode[]; // Lista de filhos
    isModalOpen?: boolean; // Verifica se um modal está aberto
}

export default function ScrollWrapper({ children, isModalOpen }: ScrollWrapperProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const touchStartY = useRef<number | null>(null);

    const validChildren = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) // Filtra apenas filhos válidos
    );

    const handleScroll = (event: WheelEvent) => {
        if (isScrolling || isMobile || isModalOpen) return;

        const target = event.target as HTMLElement;

        if (target.closest(".modal") || target.closest(".interactive")) return;

        setIsScrolling(true);

        if (event.deltaY > 0 && currentIndex < validChildren.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (event.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => setIsScrolling(false), 1000);
    };

    const handleTouchStart = (event: TouchEvent) => {
        if (isMobile || isModalOpen) return;
        touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
        if (isScrolling || touchStartY.current === null || isMobile || isModalOpen) return;

        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY.current - touchEndY;

        setIsScrolling(true);

        if (deltaY > 50 && currentIndex < validChildren.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (deltaY < -50 && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => setIsScrolling(false), 1000);
        touchStartY.current = null;
    };

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1281);
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
    }, [currentIndex, isScrolling, isMobile, isModalOpen]);

    if (isMobile) {
        return <div>{validChildren}</div>;
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
                {validChildren.map((child, index) => (
                    <div key={index} className="min-h-screen w-screen">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
