interface HeroProps {
  jobTitle: string;
  valueProposition: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export function Hero({
  jobTitle,
  valueProposition,
  primaryButton,
  secondaryButton
}: HeroProps) {
  // Pre-calculated particle positions for performance and purity
  const particles = [
    { left: '10%', top: '20%', delay: '0s', duration: '2.5s' },
    { left: '25%', top: '70%', delay: '0.5s', duration: '3.2s' },
    { left: '40%', top: '15%', delay: '1s', duration: '2.8s' },
    { left: '60%', top: '80%', delay: '1.5s', duration: '3.5s' },
    { left: '75%', top: '35%', delay: '2s', duration: '2.9s' },
    { left: '85%', top: '60%', delay: '2.5s', duration: '3.1s' },
    { left: '15%', top: '85%', delay: '0.8s', duration: '2.7s' },
    { left: '50%', top: '40%', delay: '1.2s', duration: '3.3s' },
    { left: '90%', top: '10%', delay: '0.3s', duration: '2.6s' },
    { left: '30%', top: '55%', delay: '1.8s', duration: '3.0s' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main Title with Cyberpunk Effect */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in relative">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                {jobTitle}
              </span>
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 opacity-20 blur-xl scale-110 animate-pulse"></div>
            </h1>
            {/* Neon Underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)]"></div>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed animate-fade-in-delayed">
              {valueProposition}
            </p>
          </div>

          {/* CTA Buttons with Neomorphism */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href={primaryButton.href}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-[0_8px_32px_rgba(0,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(0,255,255,0.4)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-cyan-400/30"
            >
              <span className="relative z-10">{primaryButton.text}</span>
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>

            <a
              href={secondaryButton.href}
              className="group relative px-8 py-4 border-2 border-blue-400/50 text-white font-semibold rounded-2xl backdrop-blur-sm bg-blue-900/20 hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10">{secondaryButton.text}</span>
              {/* Neon Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/0 group-hover:border-blue-400/100 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
            </a>
          </div>

          {/* Scroll Indicator with Cyberpunk Style */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-blue-400/50 rounded-full flex justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mt-2 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
