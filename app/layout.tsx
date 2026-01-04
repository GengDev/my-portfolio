import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Watchara Sritonwong | Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer specializing in scalable web applications and high-traffic E-commerce platforms. Expert in Node.js, PHP, Vue.js with performance optimization focus.",
  keywords: ["software engineer", "full-stack developer", "e-commerce", "node.js", "php", "vue.js", "portfolio"],
  authors: [{ name: "Watchara Sritonwong" }],
  openGraph: {
    title: "Watchara Sritonwong | Full-Stack Software Engineer",
    description: "Building scalable enterprise solutions with modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
