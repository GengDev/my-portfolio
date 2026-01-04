export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300">
            Passionate about creating robust, scalable solutions that drive business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Background
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Experienced full-stack developer with a strong foundation in modern web technologies
                and enterprise-grade application development. Specialized in building scalable,
                maintainable solutions that meet business objectives.
              </p>
              <p>
                Committed to writing clean, efficient code and following best practices in software
                development. Experienced in agile methodologies and cross-functional team collaboration.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></span>
                Key Strengths
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                  Full-stack development expertise
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                  Enterprise application architecture
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                  Modern web technologies
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                  Team collaboration & leadership
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                  Performance optimization
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></span>
                Current Focus
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  Scalable system design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  Cloud-native applications
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  DevOps & CI/CD
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  Technical leadership
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  Innovation & research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
