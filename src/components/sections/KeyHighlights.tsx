"use client";

import { useLanguage } from "@/context/LanguageContext";

const icons = [
    // Enterprise backend
    <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    // e-Tax / document
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    // High-concurrency
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    // RESTful API
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    // Database
    <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
    // AWS Cloud
    <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
    // CI/CD
    <svg key="6" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    // Code quality
    <svg key="7" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

const gradients = [
    "from-blue-500/20 to-cyan-500/10 border-blue-400/20 hover:border-blue-400/50",
    "from-violet-500/20 to-purple-500/10 border-violet-400/20 hover:border-violet-400/50",
    "from-amber-500/20 to-orange-500/10 border-amber-400/20 hover:border-amber-400/50",
    "from-cyan-500/20 to-teal-500/10 border-cyan-400/20 hover:border-cyan-400/50",
    "from-emerald-500/20 to-green-500/10 border-emerald-400/20 hover:border-emerald-400/50",
    "from-sky-500/20 to-blue-500/10 border-sky-400/20 hover:border-sky-400/50",
    "from-rose-500/20 to-pink-500/10 border-rose-400/20 hover:border-rose-400/50",
    "from-indigo-500/20 to-violet-500/10 border-indigo-400/20 hover:border-indigo-400/50",
];

const iconColors = [
    "text-blue-400", "text-violet-400", "text-amber-400", "text-cyan-400",
    "text-emerald-400", "text-sky-400", "text-rose-400", "text-indigo-400",
];

export function KeyHighlights() {
    const { t } = useLanguage();

    return (
        <section id="key-highlights" className="py-20 md:py-24 standard-section">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent text-glow font-orbitron">
                            {t.keyHighlights.title}
                        </span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6" />
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        {t.keyHighlights.subtitle}
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {t.keyHighlights.items.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative p-5 md:p-6 bg-gradient-to-br ${gradients[index]} rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default`}
                        >
                            {/* Icon */}
                            <div className={`mb-4 ${iconColors[index]} transition-transform duration-300 group-hover:scale-110`}>
                                {icons[index]}
                            </div>

                            {/* Text */}
                            <p className="text-gray-300 group-hover:text-white text-sm md:text-base leading-relaxed font-medium transition-colors duration-300">
                                {item}
                            </p>

                            {/* Subtle glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-inset ring-white/10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
