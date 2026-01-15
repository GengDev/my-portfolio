"use client";

import React, { useState, useEffect } from "react";
import { Rocket, Sparkles, Zap } from "lucide-react";

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState("");
  
  const fullText = "SYSTEM_READY... INITIALIZING_COSMIC_INTERFACE... ACCESS_GRANTED";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setStatusText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    setIsExiting(true);
    // Wait for the warp animation to play before completely unmounting
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Starfield (Reusing existing or creating local simplified version) */}
      <div className={`absolute inset-0 overflow-hidden ${isExiting ? "warp-speed-active" : ""}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#000000] to-black"></div>
        <div className="stars-overlay"></div>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 text-center transform transition-all duration-700 ${isExiting ? "scale-150 blur-xl opacity-0" : "scale-100"}`}>
        
        {/* Animated Badge */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative border border-blue-500/30 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-blue-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <span className="mr-2 animate-pulse">●</span> System Online
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          <span className="inline-block hover:scale-105 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 [text-shadow:0_0_30px_rgba(59,130,246,0.5)]">
            PORTFOLIO
          </span>
          <span className="block text-2xl md:text-3xl font-light text-slate-400 mt-2 tracking-[0.5em] uppercase">
            Experience
          </span>
        </h1>

        {/* Typing Status Text */}
        <div className="h-8 mb-12">
          <p className="font-mono text-xs md:text-sm text-cyan-500/80 tracking-wider">
            {statusText}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnterClick}
          className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none focus:outline-none"
        >
          {/* Button Borders with glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
          <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

          {/* Button Background */}
          <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Button Content */}
          <div className="relative flex items-center justify-center space-x-3">
            <span className="text-cyan-400 font-mono text-lg tracking-[0.2em] group-hover:text-white transition-colors duration-300">
              INITIALIZE
            </span>
            <Rocket className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          
          {/* Electric spark effects (cosmetic) */}
          <div className="absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg"></div>
        </button>
      </div>

      {/* Decorative Footer */}
      <div className="absolute bottom-10 text-slate-600 text-xs font-mono tracking-widest flex items-center space-x-4">
        <span>SECURE_CONNECTION</span>
        <Zap className="w-3 h-3 text-yellow-500 animate-pulse" />
        <span>ENCRYPTED</span>
      </div>
    </div>
  );
};
