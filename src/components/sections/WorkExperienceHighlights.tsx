"use client";

import { useLanguage } from "@/context/LanguageContext";

export function WorkExperienceHighlights() {
    const { t } = useLanguage();

    return (
        <section id="work-highlights" className="py-20 md:py-24 standard-section">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Project Experience Highlights */}
                    <div className="space-y-8">
                        <div className="mb-8">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-orbitron">
                                {t.work.experience.title}
                            </h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6"></div>
                            <p className="text-gray-400">
                                {t.work.experience.subtitle}
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {t.work.experience.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-4 p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 hover:bg-slate-800/60"
                                >
                                    <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Example Systems Built */}
                    <div className="space-y-8">
                        <div className="mb-8">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-orbitron">
                                {t.work.systems.title}
                            </h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mb-6"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {t.work.systems.items.map((system, index) => (
                                <div
                                    key={index}
                                    className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:bg-slate-800/60 flex items-center gap-3"
                                >
                                    <span className="text-xl">📦</span>
                                    <span className="text-gray-300 font-medium">{system}</span>
                                </div>
                            ))}
                        </div>

                        {/* Visual Decoration for Systems */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-3xl border border-indigo-400/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/5 blur-3xl rounded-full"></div>
                            <p className="text-indigo-300 text-sm italic relative z-10">
                                "Building robust systems that solve complex business challenges with clean, efficient architecture."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
