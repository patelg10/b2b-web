import React, { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Laptop, Monitor, Smartphone, Watch, MoreHorizontal, Settings, Box } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { name: "iPhone Parts", icon: Smartphone, count: "2,400+", color: "bg-black text-white" },
  { name: "Samsung Parts", icon: Laptop, count: "1,800+", color: "bg-surface-container-high text-on-surface" },
  { name: "iPad Parts", icon: Monitor, count: "900+", color: "bg-[#F5F5F7] text-black" },
  { name: "Accessories", icon: Box, count: "4,500+", color: "bg-[#fffde7] text-black" },
  { name: "Apple Watch", icon: Watch, count: "600+", color: "bg-surface-container-low text-on-surface" },
  { name: "Tools", icon: Settings, count: "1,200+", color: "bg-primary text-black" },
  { name: "Pixel Parts", icon: Smartphone, count: "400+", color: "bg-surface-container-high text-on-surface" },
  { name: "Other Brands", icon: MoreHorizontal, count: "3,100+", color: "bg-surface-container-high text-on-surface" }
];

export default function MainCategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-[11px] font-black uppercase tracking-[4px] opacity-40">Shop by Category</h2>
          <div className="h-px w-20 bg-black/5" />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-8 scroll-smooth"
      >
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className={`flex-shrink-0 w-[240px] rounded-[2.5rem] p-8 ${cat.color} group cursor-pointer shadow-sm hover:shadow-xl transition-all border border-black/5`}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <cat.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 leading-none">{cat.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic">{cat.count} Items</span>
                  <Link to="/shop" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
