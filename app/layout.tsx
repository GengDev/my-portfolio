import type { Metadata } from "next";
import { Inter, Orbitron, Chakra_Petch } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { LanguageProvider } from "@/context/LanguageContext";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const chakra = Chakra_Petch({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

export const metadata: Metadata = {
  title: "Watchara Sritonwong | Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer with 3+ years of experience in enterprise backend systems, e-commerce platforms, document management, and e-Tax integrations. Expert in Node.js, PHP, Python, AWS Lambda, and CI/CD workflows.",
  keywords: ["software engineer", "full-stack developer", "enterprise backend", "e-commerce", "node.js", "php", "python", "aws", "docker", "ci/cd", "e-tax", "portfolio", "web development", "Bangkok", "Thailand"],
  authors: [{ name: "Watchara Sritonwong" }],
  creator: "Watchara Sritonwong",
  publisher: "Watchara Sritonwong",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-portfolio-url.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Watchara Sritonwong | Full-Stack Software Engineer",
    description: "3+ years building enterprise backend systems, e-Tax integrations, and scalable e-commerce platforms with Node.js, AWS, and modern CI/CD workflows.",
    url: "https://your-portfolio-url.com",
    siteName: "Watchara Sritonwong Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Watchara Sritonwong - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watchara Sritonwong | Full-Stack Software Engineer",
    description: "3+ years building enterprise backend systems, e-Tax integrations, and scalable e-commerce platforms with Node.js, AWS, and modern CI/CD workflows.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${chakra.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Watchara Sritonwong",
              "jobTitle": "Full-Stack Software Engineer",
              "description": "Full-Stack Software Engineer with 3+ years of experience in enterprise backend systems, e-Tax integrations (EVRT/EPP10), document management, and scalable e-commerce platforms.",
              "url": "https://your-portfolio-url.com",
              "sameAs": [
                "https://github.com/GengDev",
                "https://linkedin.com/in/watchara-sritonwong"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangkok",
                "addressCountry": "Thailand"
              },
              "email": "Watchara.geng.work@gmail.com",
              "worksFor": {
                "@type": "Organization",
                "name": "Brainergy Co., Ltd."
              },
              "knowsAbout": [
                "Node.js", "PHP", "Python", "C#",
                "Vue.js", "Nuxt.js", "React", "Next.js",
                "AWS Lambda", "AWS S3", "Docker",
                "MySQL", "PostgreSQL", "Microsoft SQL Server",
                "RESTful API", "CI/CD", "GitLab CI", "GitHub Actions",
                "e-Tax Invoice", "e-Receipt", "Digital Signature",
                "Unit Testing", "SonarQube", "Performance Optimization"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full-Stack Software Engineer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Bangkok",
                  "addressCountry": "TH"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Watchara Sritonwong - Full-Stack Software Engineer",
              "url": "https://your-portfolio-url.com",
              "description": "Portfolio of Watchara Sritonwong, Full-Stack Software Engineer specializing in modern web technologies",
              "author": {
                "@type": "Person",
                "name": "Watchara Sritonwong"
              },
              "publisher": {
                "@type": "Person",
                "name": "Watchara Sritonwong"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-portfolio-url.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-inter antialiased text-white min-h-screen flex flex-col relative overflow-auto" style={{ background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%), linear-gradient(135deg, #0c0a1a 0%, #1a1625 50%, #2a2438 100%)' }}>
        <LanguageProvider>
          {/* Cosmic Background Effects */}
          <div className="cosmic-particles">
            <div className="cosmic-particle"></div>
            <div className="cosmic-particle"></div>
            <div className="cosmic-particle"></div>
            <div className="cosmic-particle"></div>
            <div className="cosmic-particle"></div>
          </div>

          {/* Shooting Stars */}
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>

          {/* Meteor Showers */}
          <div className="meteor-shower"></div>
          <div className="meteor-shower"></div>
          <div className="meteor-shower"></div>

          {/* Energy Waves */}
          <div className="energy-wave"></div>
          <div className="energy-wave"></div>
          <div className="energy-wave"></div>

          {/* Cosmic Energy Orbs */}
          <div className="cosmic-orb"></div>
          <div className="cosmic-orb"></div>
          <div className="cosmic-orb"></div>

          <ErrorBoundary>
            <Header />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </ErrorBoundary>
        </LanguageProvider>
      </body>
    </html >
  );
}
