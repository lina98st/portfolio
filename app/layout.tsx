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
  description:
    "Portfolio of Alina Schmidt, fullstack software developer based in Germany.",
  openGraph: {
    images: ["/portfolio-website.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav className="nav">
          <span className="nav__logo">A.</span>
          <div className="nav__links">
            <Link href="#skills" className="nav__link">
              Skills
            </Link>
            <Link href="#projects" className="nav__link">
              Projects
            </Link>
            <Link href="#about" className="nav__link">
              About
            </Link>
            <Link href="#contact" className="nav__link">
              Contact
            </Link>
          </div>
          <a href="#contact" className="nav__cta">
            Get in touch
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
