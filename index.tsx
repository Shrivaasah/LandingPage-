import React, { useState } from "react";
import { Search, User, Menu, X, Play, Star, Clock, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function CinematicHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-black text-white font-[Inter] overflow-hidden relative">
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Bottom Blur Overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 backdrop-blur-xl"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 45%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 45%)"
        }}
      />

      {/* Navbar */}
      <div className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6">
        <div className="text-lg md:text-xl tracking-wide animate-blur-fade-up" style={{ animationDelay: "0ms" }}>
          CINEMATIC
        </div>

        <div className="hidden lg:flex gap-8 text-sm">
          {["Movies", "TV Series", "Editor's Pick", "Interviews", "User Reviews"].map((item, i) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-300 transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 rounded-full liquid-glass animate-blur-fade-up" style={{ animationDelay: "350ms" }}>
            <Search size={18} /> Search
          </button>

          <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full liquid-glass animate-blur-fade-up" style={{ animationDelay: "400ms" }}>
            <User size={18} />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full liquid-glass animate-blur-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <div className="relative w-5 h-5">
              <Menu className={`absolute transition-all duration-500 ${menuOpen ? "opacity-0 rotate-180 scale-50" : "opacity-100"}`} />
              <X className={`absolute transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0 rotate-180 scale-50"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-[72px] left-0 w-full z-40 transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <div className="bg-gray-900/95 backdrop-blur-lg border-y border-gray-800 shadow-2xl p-4">
          {["Movies",
