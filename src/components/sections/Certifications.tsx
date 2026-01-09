export function Certifications() {
  return (
    <section id="certifications" className="py-20 cosmic-section relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Professional certifications and notable achievements in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Military Service</h3>
                <p className="text-cyan-400 text-sm">Nov 2023 - Nov 2024</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Completed mandatory military service, demonstrating discipline and commitment to national duty.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">💼</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">SIIT Internship</h3>
                <p className="text-sky-400 text-sm">May 2022 - Oct 2023</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Workflow automation and data management internship at Sirindhorn International Institute of Technology.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Performance Excellence</h3>
                <p className="text-blue-400 text-sm">Ongoing Achievement</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Recognized for implementing performance optimizations that improved page load times and user retention.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30">
            <span className="text-cyan-300 font-medium">
              🎯 Committed to continuous learning and professional development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
