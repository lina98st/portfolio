import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alina Schmidt — Software Developer",
  description: "Portfolio of Alina Schmidt, fullstack software developer based in Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-sm border-b border-white/5">
          <span className="text-pink font-bold text-xl">A.</span>
          <div className="flex items-center gap-8 text-sm text-muted">
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          
<a href="#contact" className="bg-pink text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-pink-light transition-colors">
            Hire me
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}