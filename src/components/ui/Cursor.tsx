"use client";

import React, { useEffect, useState } from "react";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            >
                <div
                    className={`relative flex items-center justify-center transition-all duration-150 ease-out ${isPointer ? "scale-150" : "scale-100"
                        }`}
                >
                    <div className="w-4 h-4 rounded-full bg-cyan-400 opacity-80 blur-[2px]"></div>
                    <div className="absolute w-8 h-8 rounded-full border border-cyan-400/50 animate-ping"></div>
                </div>
            </div>
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen transition-transform duration-300 ease-out"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            >
                <div className={`w-8 h-8 rounded-full border border-white/30 transition-all duration-300 ${isPointer ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    }`}></div>
            </div>
        </>
    );
};
