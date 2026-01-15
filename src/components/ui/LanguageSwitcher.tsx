"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
            className="relative group flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
            aria-label="Toggle Language"
        >
            <Globe className={`w-4 h-4 ${language === 'th' ? 'text-cyan-400' : 'text-slate-400'} group-hover:text-cyan-400 transition-colors`} />
            <div className="flex items-center text-xs font-mono font-bold tracking-wider relative">
                <span className={`transition-colors duration-300 ${language === 'en' ? 'text-cyan-400' : 'text-slate-500'}`}>EN</span>
                <span className="mx-1.5 text-slate-600">/</span>
                <span className={`transition-colors duration-300 ${language === 'th' ? 'text-cyan-400' : 'text-slate-500'}`}>TH</span>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </div>
        </button>
    );
};
