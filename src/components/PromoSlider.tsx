import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Pre-owned Google Pixel, Motorola, and OnePlus now in stock!",
    subtitle: "Thousands of Devices Ready for Resale",
    cta: "Pre-order Now",
    badge: "Give Devices a Second Life This Earth Day",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200",
    color: "bg-surface-container-high",
    features: ["Fully Tested & Functional", "Resale Ready", "60-Day Returns"]
  },
  {
    id: 2,
    title: "New Apple products means new Apple parts",
    subtitle: "Genuine Apple Parts are now available for latest models",
    cta: "Shop Genuine Apple Parts",
    badge: "Limited Time Offer",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200",
    color: "bg-surface",
    features: ["OEM Certified", "Original Displays", "Battery Kits"]
  },
  {
    id: 3,
    title: "The New Shipping Option",
    subtitle: "Professional Logistics with Real-time Tracking",
    cta: "Learn More",
    badge: "Meet DPD",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    color: "bg-primary/5",
    features: ["Next Day Delivery", "Guaranteed Slots", "DPD Tracking"]
  }
];

export default function PromoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative w-full h-[480px] overflow-hidden bg-surface">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className={`absolute inset-0 px-10 flex items-center ${SLIDES[current].color}`}
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 z-10">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="inline-flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-5 py-2 shadow-sm"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">{SLIDES[current].badge}</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl font-black tracking-[-4px] leading-[0.9] uppercase max-w-xl"
              >
                {SLIDES[current].title}
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-8"
              >
                <p className="text-lg font-medium opacity-60 max-w-sm">{SLIDES[current].subtitle}</p>
                <button className="pill-button-primary h-14 px-10 flex items-center gap-3 text-sm uppercase tracking-widest shadow-xl shadow-primary/20">
                  {SLIDES[current].cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <div className="flex gap-10 pt-4 border-t border-on-surface/5">
                {SLIDES[current].features.map((f, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl rotate-3 translate-x-12 translate-y-6">
                <img src={SLIDES[current].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              {/* Floating element decorative */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-10 flex items-center gap-10 z-20">
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === i ? "w-12 bg-primary" : "w-1.5 bg-on-surface opacity-10 hover:opacity-30"
              }`}
            />
          ))}
        </div>
        
        <div className="flex gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-on-surface/5 flex items-center justify-center hover:bg-white transition-all shadow-sm">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-on-surface/5 flex items-center justify-center hover:bg-white transition-all shadow-sm">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Circular Progress Indicator for Auto-play */}
      <div className="absolute bottom-10 right-10 flex items-center justify-center w-16 h-16 pointer-events-none">
        <svg className="w-full h-full -rotate-90">
          <circle 
            cx="32" cy="32" r="28" 
            className="stroke-on-surface opacity-5 fill-none" 
            strokeWidth="3"
          />
          <motion.circle 
            key={current}
            cx="32" cy="32" r="28" 
            className="stroke-primary fill-none" 
            strokeWidth="3"
            strokeDasharray="175.93"
            initial={{ strokeDashoffset: 175.93 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </svg>
        <span className="absolute text-[12px] font-black opacity-30">{current + 1}</span>
      </div>
    </section>
  );
}
