"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Rocket, Sparkles, Zap } from "lucide-react";

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const fullText = "SYSTEM_READY... INITIALIZING_COSMIC_INTERFACE... ACCESS_GRANTED";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setStatusText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setIsScanning(true), 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Background HUD Layers */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#2dd4bf 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Screen Corners HUD */}
      <div className={`fixed inset-10 z-20 pointer-events-none border border-cyan-500/10 transition-all duration-1000 ${isExiting ? 'scale-150 opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 animate-pulse"></div>

        {/* Small HUD Text */}
        <div className="absolute top-2 left-4 font-mono text-[10px] text-cyan-500/40 uppercase tracking-[0.2em]">
          Initialization Phase: {Math.min(100, Math.floor((statusText.length / fullText.length) * 100))}%
        </div>
        <div className="absolute bottom-2 right-4 font-mono text-[10px] text-cyan-500/40 uppercase tracking-[0.2em]">
          Loc: 13.7563° N, 100.5018° E
        </div>
      </div>

      {/* Background Starfield */}
      <div className={`absolute inset-0 overflow-hidden ${isExiting ? "warp-speed-active" : ""}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#000000] to-black"></div>
        <div className="stars-overlay"></div>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 text-center transform transition-all duration-1000 ${isExiting ? "scale-150 blur-3xl opacity-0" : "scale-100"}`}>

        {/* Animated Badge */}
        <div className="mb-8 relative inline-block group">
          <div className="absolute -inset-2 bg-cyan-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative border border-cyan-500/30 bg-black/50 backdrop-blur-md px-6 py-1.5 rounded-sm text-cyan-400 text-[10px] font-mono tracking-[0.3em] uppercase transition-all duration-300 group-hover:border-cyan-400 group-hover:text-cyan-300">
            <span className="inline-block w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
            Interface Status: Optimal
          </div>
        </div>

        {/* Profile Scanning Portal */}
        <div className="mb-12 relative flex items-center justify-center">
          {/* Rotating Rings */}
          <div className="absolute inset-0 -m-8 pointer-events-none">
            <svg className={`w-full h-full animate-spin-slow ${isScanning ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="20 10" className="text-cyan-500/30" />
            </svg>
            <svg className={`absolute inset-0 w-full h-full animate-spin-reverse-slow ${isScanning ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" className="text-blue-500/20" />
            </svg>
          </div>

          <div className="relative group p-1 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 rounded-full">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-white/10 overflow-hidden relative shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-cyan-400/50">
              <Image
                src="/images/profile.jpg"
                alt="Watchara Sritonwong"
                fill
                className={`object-cover transition-all duration-1000 ${isScanning ? 'grayscale-0 scale-100' : 'grayscale brightness-50 scale-110'}`}
                priority
              />
              {/* Scanline overlay on image */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(45,212,191,0.05)_50%,transparent_100%)] bg-[size:100%_4px] animate-scanline pointer-events-none"></div>
            </div>

            {/* Target Reticles */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400 pointer-events-none"></div>
          </div>

          {/* Identification Label */}
          <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 transition-all duration-1000 ${isScanning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">Identity Verified</span>
          </div>
        </div>

        {/* Main Title with Glitch */}
        <div className="relative mb-6 group cursor-default">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter relative inline-block">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white group-hover:animate-glitch-skew">
              PORTFOLIO
            </span>
            {/* Holographic Shadows */}
            <span className="absolute top-0 left-0 -ml-1 text-cyan-500/30 blur-sm group-hover:animate-glitch-subtle -z-0">PORTFOLIO</span>
            <span className="absolute top-0 left-0 ml-1 text-blue-500/30 blur-sm group-hover:animate-glitch-subtle-2 -z-0">PORTFOLIO</span>
          </h1>
          <span className="block text-xl md:text-2xl font-light text-cyan-500/40 mt-1 tracking-[0.8em] md:tracking-[1.2em] uppercase font-mono">
            Experience
          </span>
        </div>

        {/* Typing Status Text */}
        <div className="h-10 mb-8 flex flex-col items-center">
          <p className="font-mono text-[10px] md:text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
            {statusText}
            <span className="inline-block w-1.5 h-4 ml-1 bg-cyan-400/80 animate-pulse align-middle"></span>
          </p>
        </div>

        {/* Enter Button HUD Style */}
        <button
          onClick={handleEnterClick}
          className="group relative px-12 py-5 bg-transparent overflow-hidden focus:outline-none transition-all duration-500 active:scale-95"
        >
          {/* HUD Border segments */}
          <div className="absolute top-0 left-0 w-4 h-full border-l border-cyan-500/50 group-hover:h-full transition-all duration-300"></div>
          <div className="absolute top-0 right-0 w-4 h-full border-r border-cyan-500/50 transition-all"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500 opacity-30"></div>

          {/* Button Background Fill */}
          <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

          {/* Button Content */}
          <div className="relative flex items-center justify-center space-x-4">
            <Rocket className="w-5 h-5 text-cyan-400 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500" />
            <span className="text-cyan-400 font-mono text-xs md:text-sm font-bold tracking-[0.5em] group-hover:text-white transition-colors duration-300">
              ESTABLISH_LINK
            </span>
          </div>

          {/* Glitch Overlay on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            <div className="absolute top-0 left-0 w-full h-px bg-cyan-400 animate-glitch-line"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 animate-glitch-line-delayed"></div>
          </div>
        </button>
      </div>

      {/* Decorative Footer HUD */}
      <div className="absolute bottom-10 z-20 w-full px-10 flex justify-between items-end">
        <div className="flex flex-col space-y-1 opacity-40">
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">Protocol: Neural_Gate_v4.2</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-end space-y-1 opacity-40">
            <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest text-right">Secure Uplink: Established</span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-cyan-500 to-transparent"></div>
          </div>
          <Zap className="w-4 h-4 text-cyan-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
