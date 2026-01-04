import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:Watchara.geng.work@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Watchara Sritonwong. All rights reserved.
            </p>
            <p className="text-cyan-400/60 text-xs mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative p-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 rounded-xl hover:bg-white/5 border border-transparent hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-110"
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                >
                  <Icon size={20} className="group-hover:animate-pulse" />
                  <span className="sr-only">{link.name}</span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-8 pt-8 border-t border-cyan-400/20">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}
