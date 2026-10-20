"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const featuredProducts = [
  {
    id: "dji-mavic-3-pro",
    category: "Drones & Aerial Systems",
    title: "DJI Mavic 3 Pro",
    tagline: "Unmatched Triple-Camera Flagship Drone",
    description:
      "Engineered for high-end aerial inspection and surveillance featuring a multi-focal camera system, 43-min flight time, and omnidirectional obstacle sensing.",
    ctaLink: "/products#drones",
    bgGradient: "from-zinc-900 via-black to-slate-950",
  },
  {
    id: "fluke-ti480-pro",
    category: "Thermal Imaging",
    title: "Fluke Ti480 PRO",
    tagline: "High-Resolution Industrial Infrared Camera",
    description:
      "Delivers 640 x 480 thermal resolution with MultiSharp Focus for crystal-clear predictive maintenance and critical facility inspection.",
    ctaLink: "/products#thermal",
    bgGradient: "from-neutral-900 via-slate-900 to-black",
  },
  {
    id: "icom-m87",
    category: "Radio Communications",
    title: "ICOM IC-M87 ATEX Safe",
    tagline: "Intrinsically Safe Marine & Land Transceiver",
    description:
      "Built for hazardous environments and maritime operations. Waterproof, ruggedized, and compliant with international explosion-proof ATEX standards.",
    ctaLink: "/products#radios",
    bgGradient: "from-slate-950 via-zinc-900 to-black",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* Dynamic Background Slider */}
      {featuredProducts.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-gradient-to-br ${
            product.bgGradient
          } ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-left pt-12 pb-24">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-semibold tracking-widest uppercase">
                {product.category}
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {product.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                {product.tagline}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href={product.ctaLink}
                  className="bg-white text-black text-sm font-semibold px-7 py-3 rounded-full hover:bg-gray-200 transition-all uppercase tracking-wider"
                >
                  Explore Details
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-all uppercase tracking-wider"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls & Navigation Indicators */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentSlide ? "w-10 bg-blue-500" : "w-3 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-xs text-gray-400 tracking-wider font-mono">
          0{currentSlide + 1} / 0{featuredProducts.length}
        </div>
      </div>
    </div>
  );
}