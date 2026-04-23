import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MegaMenuBrand } from "../data";

interface MegaMenuProps {
  brand: MegaMenuBrand;
  onClose: () => void;
}

export default function MegaMenu({ brand, onClose }: MegaMenuProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (idx: number) => {
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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 w-full bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-t border-on-surface/5 z-[60] overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto flex h-[620px]">
        {/* Left Sidebar: Navigation / Quick Links */}
        <div className="w-[280px] bg-white border-r border-on-surface/5 p-6 flex flex-col">
           <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input 
                type="text" 
                placeholder={`Search model...`} 
                className="w-full bg-gray-100 rounded-full py-2.5 pl-10 pr-4 text-xs border-none outline-none focus:ring-1 focus:ring-primary shadow-inner"
              />
           </div>
           
           <nav className="space-y-1 overflow-y-auto no-scrollbar flex-1">
             {brand.categories.map((cat, idx) => (
               <button
                 key={cat.name}
                 onMouseEnter={() => scrollToSection(idx)}
                 className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-on-surface/60 hover:text-black hover:bg-gray-50 flex items-center justify-between group"
               >
                 {cat.name}
                 <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
               </button>
             ))}
             <button className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold text-primary mt-4 border-t border-gray-100 pt-6">
               Others
             </button>
           </nav>
        </div>

        {/* Right Content: Multi-column Grid */}
        <div 
          ref={scrollRef}
          className="flex-1 p-10 bg-white overflow-y-auto no-scrollbar"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">
            {brand.categories.map((cat, idx) => (
              <div key={cat.name} id={`category-${idx}`} className="space-y-6">
                <div className="flex items-center">
                  <h3 className="bg-gray-100 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-on-surface">
                    {cat.name}
                  </h3>
                </div>
                
                <div className="space-y-2.5">
                  {cat.items.slice(0, 10).map((item) => (
                    <Link 
                      key={item.name}
                      to={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={onClose}
                      className="group flex items-center justify-between text-xs font-semibold text-on-surface/80 hover:text-primary transition-all"
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      {item.isNew && (
                        <span className="bg-green-500 text-white text-[7px] font-black px-1 py-0.5 rounded-sm uppercase leading-none">new</span>
                      )}
                    </Link>
                  ))}
                  
                  <Link 
                    to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={onClose}
                    className="inline-block text-[10px] font-black uppercase tracking-wider text-black border-b-2 border-black/10 hover:border-black transition-all pt-2 mt-2"
                  >
                    View all models
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
