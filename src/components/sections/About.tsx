import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 cosmic-section relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Cosmic Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow">
              About Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            Exploring the digital cosmos, one line of code at a time
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;m a dedicated full-stack developer with over 5 years of experience building
                  scalable web applications and high-traffic e-commerce platforms. My journey
                  in software development has been driven by a passion for solving complex problems
                  and creating solutions that make a real impact.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community. I believe
                  in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>
            </div>

            {/* Cosmic Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Background decorative elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 to-cyan-400/5 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>

                <div className="w-32 h-32 rounded-2xl border-2 border-indigo-400/40 overflow-hidden shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Watchara Sritonwong"
                    width={128}
                    height={128}
                    className="object-cover transition-transform duration-300 group-hover:scale-110 filter brightness-105 contrast-105 saturate-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Online status indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-full border-2 border-slate-800 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full cosmic-glow shadow-indigo-400/50"></div>
                </div>

                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-2xl border border-indigo-400/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="absolute inset-0 rounded-2xl border border-cyan-400/10 scale-125 opacity-0 group-hover:opacity-50 transition-all duration-500 -z-20"></div>

                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-400/30 rounded-full blur-sm animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400/30 rounded-full blur-sm animate-pulse opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>

            {/* Cosmic Personal Details */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-300">
                <div className="text-indigo-400 text-sm font-medium mb-1">Location</div>
                <div className="text-white">Bangkok, Thailand</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">Experience</div>
                <div className="text-white">2.5+ Years</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">Education</div>
                <div className="text-white">Computer Science</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">Interests</div>
                <div className="text-white">Tech & Cosmos</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Expertise */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>

              {/* Cosmic Skills Grid */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/30 transition-colors duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Development</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Building complete web applications from frontend to backend, ensuring seamless user experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-colors duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Performance Optimization</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Implementing advanced optimization techniques for fast loading and excellent user experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-colors duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">E-commerce Solutions</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Developing comprehensive platforms with complex features and real-time inventory systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
