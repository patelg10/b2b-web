import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MegaMenuBrand } from "../data";

interface MegaMenuProps {
  brand: MegaMenuBrand;
  onClose: () => void;
}

export default function MegaMenu({ brand, onClose }: MegaMenuProps) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const activeCategory = brand.categories[activeCategoryIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-on-surface/5 z-[60] overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto flex h-[520px]">
        {/* Left Sidebar: Categories */}
        <div className="w-[320px] bg-black border-r border-white/5 p-8 flex flex-col">
           <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-30" />
              <input 
                type="text" 
                placeholder={`Search ${brand.brand}...`} 
                className="w-full bg-white/5 text-white rounded-full py-2.5 pl-10 pr-4 text-xs border-none outline-none focus:ring-1 focus:ring-primary shadow-sm placeholder:text-white/20"
              />
           </div>
           
           <h4 className="text-[10px] font-black uppercase tracking-[2px] text-white/40 px-4 mb-4">Main Categories</h4>
           
           <nav className="space-y-1 overflow-y-auto no-scrollbar flex-1">
             {brand.categories.map((cat, idx) => (
               <button
                 key={cat.name}
                 onMouseEnter={() => setActiveCategoryIdx(idx)}
                 className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                   activeCategoryIdx === idx 
                   ? "bg-primary text-black shadow-lg" 
                   : "text-white/60 hover:text-white hover:bg-white/5"
                 }`}
               >
                 {cat.name}
                 <ChevronRight className={`w-4 h-4 transition-transform ${activeCategoryIdx === idx ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100"}`} />
               </button>
             ))}
           </nav>
        </div>

        {/* Right Content: Items Pane */}
        <div className="flex-1 p-12 bg-white flex flex-col">
          <div className="flex items-center justify-between mb-10 border-b border-on-surface/5 pb-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[2px] opacity-30">Browsing</span>
              <h2 className="text-4xl font-extrabold tracking-[-3px] uppercase leading-none">{activeCategory?.name}</h2>
            </div>
            <Link 
              to={`/category/${activeCategory?.name.toLowerCase().replace(/\s+/g, '-')}`} 
              onClick={onClose}
              className="text-xs font-black uppercase tracking-widest text-[#FFF100] border-b-2 border-primary/20 hover:border-primary transition-all pb-1 h-fit"
            >
              View Full Range
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 overflow-y-auto no-scrollbar pr-4">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategoryIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="contents"
              >
                {activeCategory?.items.map((item, i) => (
                  <Link 
                    key={item.name}
                    to={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={onClose}
                    className="group flex items-center gap-3 py-1.5 transition-all text-on-surface hover:text-[#FFF100] border-b border-transparent"
                  >
                    <span className="text-sm font-semibold tracking-tight opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">{item.name}</span>
                    {item.isNew && (
                      <span className="bg-primary text-black text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">New</span>
                    )}
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
