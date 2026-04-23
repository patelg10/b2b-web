import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Pre-owned Google Pixel, Motorola, and OnePlus now in stock!",
    subtitle: "Pre-owned Devices",
    description: "Thousands of Devices Ready for Resale",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2000",
    bgColor: "bg-[#4D4D4D]",
    textColor: "text-white",
    cta: "Pre-order Now",
    secondaryCta: "See device grading details",
    badge: "Give Devices a Second Life This Earth Day",
    features: ["Fully Tested & Functional", "Resale Ready", "60-Day Returns"]
  },
  {
    id: 2,
    title: "New Apple products means new Apple parts",
    subtitle: "Genuine Apple Parts",
    description: "Latest Genuine Apple Parts are now available for latest models including M5 series.",
    image: "https://images.unsplash.com/photo-1517336714467-4c3a4a3ef23a?q=80&w=2000",
    bgColor: "bg-[#F5F5F7]",
    textColor: "text-black",
    cta: "Shop Genuine Apple Parts",
    models: ["MacBook Neo", "MacBook Pro M5", "MacBook Air M5", "Studio Display", "iPad Air M4", "iPhone 17e"]
  },
  {
    id: 3,
    title: "Solder Paste & Flux",
    subtitle: "AMTECH Advanced SMT Solder Products",
    description: "Now available at Mobile Sentrix. Professional grade laboratory supplies.",
    image: "https://images.unsplash.com/photo-1590674000550-937f2863980a?q=80&w=2000",
    bgColor: "bg-white",
    textColor: "text-[#4D4D4D]",
    cta: "Shop Now!",
    badge: "Applicator tips included!"
  },
  {
    id: 4,
    title: "The New Shipping Option",
    subtitle: "Meet dpd",
    image: "https://images.unsplash.com/photo-1586528116311-ad861f1c4cbe?q=80&w=2000",
    bgColor: "bg-white",
    textColor: "text-black",
    shippingRates: [
      { name: "DPD NEXT DAY", cost: "£3.99", threshold: "£250", time: "4:00 PM" },
      { name: "DPD 12PM", cost: "£6.99", threshold: "£500", time: "4:00 PM" },
      { name: "DPD SATURDAY", cost: "£9.99", threshold: "£750", time: "3:00 PM" }
    ]
  },
  {
    id: 5,
    title: "Click & Collect",
    subtitle: "Now Available",
    description: "Order online. Pick up and pay in-store same-day and stress-free.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2000",
    bgColor: "bg-[#EAEAEA]",
    textColor: "text-black",
    cta: "Start using Click & Collect today"
  }
];

export default function PromoSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % SLIDES.length);
          return 0;
        }
        return prev + 0.4;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const next = () => { setCurrent((c) => (c + 1) % SLIDES.length); setProgress(0); };
  const prev = () => { setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length); setProgress(0); };

  const slide = SLIDES[current];

  return (
    <section className="bg-surface py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative h-[500px] w-full rounded-[3.5rem] overflow-hidden transition-colors duration-1000 ${slide.bgColor}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 px-20 flex items-center"
            >
              {/* Background Art/Image */}
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <img 
                  src={slide.image} 
                  className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className={`relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${slide.textColor}`}>
                <div className="space-y-8">
                  {slide.subtitle && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 mb-6"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] italic ${slide.id % 2 === 0 ? 'bg-black text-white' : 'bg-primary text-black'}`}>MS</div>
                      <span className="text-xs font-black uppercase tracking-[3px] opacity-70">{slide.subtitle}</span>
                    </motion.div>
                  )}

                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl font-black tracking-[-4px] leading-[0.9] uppercase max-w-xl pr-10"
                  >
                    {slide.title}
                  </motion.h2>

                  <div className="space-y-6">
                    {slide.description && (
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg font-medium opacity-60 max-w-sm leading-snug"
                      >
                        {slide.description}
                      </motion.p>
                    )}

                    {slide.badge && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md rounded-full px-6 py-2 border border-black/5"
                      >
                        <RefreshCw className="w-3 h-3 animate-spin-slow" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{slide.badge}</span>
                      </motion.div>
                    )}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-10"
                  >
                    {slide.cta && (
                      <button className={slide.id === 3 || slide.id === 5 ? "pill-button-secondary bg-[#FF2200] text-white border-none h-16 px-12" : "pill-button-primary h-16 px-12"}>
                        {slide.cta}
                      </button>
                    )}
                    {slide.secondaryCta && (
                      <button className="text-[10px] font-black uppercase tracking-[2px] border-b-2 border-current hover:opacity-100 opacity-40 transition-all pb-1">
                        {slide.secondaryCta}
                      </button>
                    )}
                  </motion.div>
                </div>

                {/* Right Side Accessories/Features */}
                <div className="hidden lg:flex flex-col items-end gap-12">
                   {slide.features && (
                     <div className="space-y-8 text-right pr-6 border-r-2 border-current/20">
                       {slide.features.map(f => (
                         <div key={f} className="space-y-1">
                            <p className="text-sm font-black uppercase tracking-wider">{f}</p>
                         </div>
                       ))}
                     </div>
                   )}

                   {slide.shippingRates && (
                     <div className="space-y-4 w-full max-w-xs">
                        {slide.shippingRates.map(rate => (
                          <div key={rate.name} className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 border border-black/5 hover:bg-white/20 transition-all group">
                             <div className="flex justify-between items-start mb-4">
                                <span className="bg-[#B2002E] text-white text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">{rate.name}</span>
                                <div className="text-[10px] font-black opacity-30 italic">{rate.time} CUT-OFF</div>
                             </div>
                             <div className="flex justify-between items-end">
                                <div>
                                   <div className="text-[8px] font-black opacity-40 uppercase tracking-widest mb-1">Shipping Cost</div>
                                   <div className="text-xl font-black italic">{rate.cost}</div>
                                </div>
                                <div className="text-right">
                                   <div className="text-[8px] font-black opacity-40 uppercase tracking-widest mb-1">Free Over</div>
                                   <div className="text-xl font-black italic">{rate.threshold}</div>
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>
                   )}
                </div>
              </div>

              {/* Progress Ring */}
              <div className="absolute bottom-12 right-12 flex items-center gap-8">
                 <div className="flex gap-3">
                   {SLIDES.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => { setCurrent(i); setProgress(0); }}
                        className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-10 bg-current' : 'w-1.5 bg-current/20'}`}
                      />
                   ))}
                 </div>
                 
                 <div className="relative w-14 h-14">
                    <svg className="w-full h-full -rotate-90">
                       <circle cx="28" cy="28" r="24" className="stroke-current/10 fill-none" strokeWidth="3" />
                       <circle 
                         cx="28" cy="28" r="24" 
                         className="stroke-current fill-none transition-all duration-100" 
                         strokeWidth="3"
                         strokeDasharray={150}
                         strokeDashoffset={150 - (150 * progress) / 100}
                       />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-sm italic">{current + 1}</div>
                 </div>

                 <div className="flex gap-4">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-current/10 flex items-center justify-center hover:bg-current hover:text-black transition-all">
                       <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-current/10 flex items-center justify-center hover:bg-current hover:text-black transition-all">
                       <ChevronRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
