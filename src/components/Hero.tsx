"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/img-1.jpg",
    alt: "3D Printing Nozzle",
  },
  {
    id: 2,
    image: "/img-2.jpg",
    alt: "Industrial Fabrication",
  },
  {
    id: 3,
    image: "/img-3.jpg",
    alt: "Abstract 3D Forms",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[800px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050012]" />
        </div>
      ))}

      {/* Grid & Glow Effects (Overlaid on images) */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 px-6 max-w-5xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
          Design. Print.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
            Inspire.
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          We transform digital ideas into high-quality 3D printed products —
          fast, precise, and reliable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
          <button className="px-8 py-4 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all transform hover:-translate-y-1">
            🟣 Get Started
          </button>
          <button className="px-8 py-4 border border-white/30 bg-white/10 rounded-full text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-md">
            ⚪ Upload Your Design
          </button>
        </div>

      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
              ? "bg-purple-500 w-8"
              : "bg-white/30 hover:bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
