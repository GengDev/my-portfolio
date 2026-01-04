interface ProfessionalSummaryProps {
  title: string;
  paragraphs: string[];
}

export function ProfessionalSummary({ title, paragraphs }: ProfessionalSummaryProps) {
  return (
    <section id="summary" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
        </div>

        <div className="relative">
          {/* Neomorphism Card with Glassmorphism */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-sky-500/20 rounded-3xl blur-2xl opacity-75"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>

            <div className="relative text-gray-200 leading-relaxed space-y-6 text-lg font-light">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="animate-fade-in-up relative"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <span className="relative z-10">{paragraph}</span>
                  {/* Subtle text glow */}
                  <span className="absolute inset-0 text-cyan-300/20 blur-sm">{paragraph}</span>
                </p>
              ))}
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 rounded-bl-2xl"></div>

            {/* Floating accent dots */}
            <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.6)]"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

    </section>
  );
}
