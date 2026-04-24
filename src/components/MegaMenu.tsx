import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronRight, ArrowRight, Star, Zap, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { MegaMenuBrand } from "../data";

interface MegaMenuProps {
  brand: MegaMenuBrand;
  onClose: () => void;
}

export default function MegaMenu({ brand, onClose }: MegaMenuProps) {
  const [hoveredCat, setHoveredCat] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (idx: number) => {
    setHoveredCat(idx);
    const element = document.getElementById(`category-${idx}`);
    if (element && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      className="fixed top-[135px] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1400px] bg-white/95 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-black/5 z-[60] overflow-hidden rounded-[3rem]"
      onMouseLeave={onClose}
    >
      <div className="flex h-[680px]">
        {/* Navigation Column */}
        <div className="w-[320px] bg-gray-50/50 border-r border-black/5 p-8 flex flex-col">
           <div className="mb-10">
              <div className="text-[10px] font-black uppercase tracking-[3px] opacity-30 mb-4">Manufacturer</div>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">{brand.brand}</h2>
           </div>

           <div className="relative mb-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input 
                type="text" 
                placeholder={`Search ${brand.brand} models...`} 
                className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 text-xs font-bold border-none outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
           </div>
           
           <nav className="space-y-1.5 overflow-y-auto no-scrollbar flex-1 pr-2">
             {brand.categories.map((cat, idx) => (
               <button
                 key={cat.name}
                 onMouseEnter={() => scrollToSection(idx)}
                 className={`w-full text-left px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-between group ${
                   hoveredCat === idx ? 'bg-black text-white shadow-lg translate-x-1' : 'text-on-surface/40 hover:text-black hover:bg-white hover:shadow-sm'
                 }`}
               >
                 {cat.name}
                 <ChevronRight className={`w-3 h-3 transition-transform ${hoveredCat === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
               </button>
             ))}
           </nav>

           <div className="mt-8 pt-8 border-t border-black/5">
              <div className="flex items-center gap-3 bg-primary/10 rounded-2xl p-4">
                 <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-black">
                    <Shield className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="text-[9px] font-black uppercase tracking-widest">Lifetime Warranty</div>
                    <div className="text-[8px] font-bold opacity-50 uppercase">On all genuine screen assemblies</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Dense Grid Content */}
        <div 
          ref={scrollRef}
          className="flex-1 p-12 bg-white overflow-y-auto no-scrollbar scroll-smooth"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {brand.categories.map((cat, idx) => (
              <div key={cat.name} id={`category-${idx}`} className="space-y-8">
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                  <h3 className="text-sm font-black uppercase tracking-[2px] text-black">
                    {cat.name}
                  </h3>
                  <span className="text-[9px] font-bold opacity-30 uppercase">{cat.items.length} Series</span>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {cat.items.map((item) => (
                    <Link 
                      key={item.name}
                      to={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={onClose}
                      className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-black/5 hover:bg-gray-50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                         <span className="text-xs font-bold text-on-surface/70 group-hover:text-black transition-colors">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.isNew && (
                          <span className="bg-green-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">NEW</span>
                        )}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Link 
                  to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-gray-100 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-primary transition-all"
                >
                  Explore All Models
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Sidebar (Internal) */}
        <div className="w-[300px] bg-gray-50/30 p-8 border-l border-black/5 hidden xl:flex flex-col gap-8">
           <div className="bg-black text-white p-6 rounded-[2rem] space-y-6 relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="w-10 h-10 rounded-xl bg-primary text-black flex items-center justify-center">
                 <Star className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-black tracking-tight uppercase leading-none">Technician's Choice</h4>
              <p className="text-[10px] font-bold opacity-50 uppercase leading-relaxed font-mono">Top quality OLED assemblies with pre-installed adhesive.</p>
              <button className="text-[9px] font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                 Shop Featured <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
           </div>

           <div className="flex-1 space-y-4">
              <div className="text-[9px] font-black uppercase tracking-[2px] opacity-30 px-2">Wholesale Specials</div>
              <div className="space-y-3">
                 {[
                   { label: 'Bulk Screens', icon: Zap, color: 'text-yellow-500' },
                   { label: 'Battery Packs', icon: Sparkles, color: 'text-blue-500' },
                   { label: 'O-Components', icon: Shield, color: 'text-green-500' }
                 ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-primary transition-all cursor-pointer group">
                       <div className="flex items-center gap-3">
                          <spec.icon className={`w-4 h-4 ${spec.color}`} />
                          <span className="text-[10px] font-black uppercase tracking-widest">{spec.label}</span>
                       </div>
                       <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-[#B2002E] text-white p-6 rounded-[2rem] text-center">
              <div className="text-[10px] font-black uppercase tracking-[3px] mb-2">Live Support</div>
              <div className="text-xl font-black italic mb-4 tracking-tighter">Talk to Expert</div>
              <button className="w-full h-12 bg-white text-black rounded-xl text-[9px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
                 Start Chat
              </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

