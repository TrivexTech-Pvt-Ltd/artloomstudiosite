"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/lib/utils/staticimages";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Services", "Materials", "Projects", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 group z-50">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-purple-500/50 group-hover:border-purple-400 transition">
          <Image
            src={Logo}
            alt="Artloom Studio Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <span className="text-xl font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors">
          Artloom Studio
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        {navLinks.map((item) => (
          <li key={item}>
            <Link
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link href="#contact" className="hidden md:block px-6 py-2.5 rounded-full bg-purple-600 text-white text-sm font-semibold shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] hover:bg-purple-500 transition-all transform hover:-translate-y-0.5">
          Get a Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        style={{ backgroundColor: "#3b0764" }}
        className={`fixed inset-0 z-[60] w-screen h-screen flex flex-col transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-purple-500/50">
              <Image src={Logo} alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">Artloom Studio</span>
          </div>
          {/* Close Button Inside Menu */}
          <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow pb-20">
          <ul className="flex flex-col gap-10 text-2xl font-medium text-center text-gray-300">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="mt-12 px-10 py-4 rounded-full bg-purple-600 text-white font-semibold text-lg shadow-[0_0_20px_rgba(147,51,234,0.4)] active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
