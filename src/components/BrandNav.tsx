import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Grid, ChevronDown, Monitor, Smartphone, Watch, Laptop, MoreHorizontal, X, ArrowRight, Menu, MapPin } from "lucide-react";
import { MEGA_MENU_DATA } from "../data";
import MegaMenu from "./MegaMenu";
import SideMenuDrawer from "./SideMenuDrawer";

export default function BrandNav() {
  const [activeBrandIdx, setActiveBrandIdx] = useState<number | null>(null);
  const [showCatalog, setShowCatalog] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div 
      className="bg-surface-container-low h-14 flex items-center relative z-40 border-b border-on-surface/5"
      onMouseLeave={() => setActiveBrandIdx(null)}
    >
      <div className="max-w-7xl mx-auto px-10 w-full flex items-center justify-between">
        <div className="flex items-center gap-10">
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-lg shadow-black/10"
          >
            <Menu className="w-4 h-4" />
            Menu
          </button>

          <div className="h-6 w-px bg-black/10" />

          <ul className="flex items-center gap-8">
            {MEGA_MENU_DATA.map((brandData, index) => (
              <motion.li 
                key={brandData.brand}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setActiveBrandIdx(index)}
                className="flex-shrink-0"
              >
                <div 
                  className={`text-[11px] font-black tracking-[1.5px] uppercase transition-all duration-300 py-4 cursor-pointer flex items-center gap-2 group ${
                    activeBrandIdx === index ? "text-primary opacity-100" : "text-on-surface opacity-50 hover:opacity-100"
                  }`}
                >
                  {brandData.brand}
                  <ChevronDown className={`w-3 h-3 transition-transform ${activeBrandIdx === index ? 'rotate-180' : 'opacity-30'}`} />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <ul className="flex items-center gap-10">
          <li className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] font-black opacity-30 uppercase tracking-widest">Live Inventory</span>
            </div>
            <div className="flex items-center gap-2">
               <MapPin className="w-3 h-3 opacity-30" />
               <span className="text-[9px] font-black opacity-30 uppercase tracking-widest">Global Sourcing</span>
            </div>
          </li>

          <motion.li 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/category/parts" className="text-[11px] font-black tracking-[1.5px] uppercase text-on-surface opacity-50 transition-all py-3 block hover:text-black hover:opacity-100 italic">
              Genuine Parts
            </Link>
          </motion.li>

          <motion.li 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/refurbishing" className="text-[11px] font-black tracking-[1.5px] uppercase text-secondary transition-all py-3 block hover:opacity-100">
              Refurbishing
            </Link>
          </motion.li>

          <motion.li 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-shrink-0 ml-auto"
          >
            <button 
              onClick={() => setShowCatalog(true)}
              className="flex items-center gap-2 bg-primary text-black px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-primary transition-all border border-black/5"
            >
              <Grid className="w-3 h-3" />
              Catalog
            </button>
          </motion.li>
        </ul>
      </div>

      <AnimatePresence>
        {activeBrandIdx !== null && (
          <MegaMenu 
            brand={MEGA_MENU_DATA[activeBrandIdx]} 
            onClose={() => setActiveBrandIdx(null)} 
          />
        )}

        {showCatalog && (
          <CatalogOverlay onClose={() => setShowCatalog(false)} />
        )}
      </AnimatePresence>

      <SideMenuDrawer 
        isOpen={isSideMenuOpen} 
        onClose={() => setIsSideMenuOpen(false)} 
      />
    </div>
  );
}


function CatalogOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-6xl h-[80vh] bg-surface-container-low rounded-[3rem] p-16 shadow-2xl flex flex-col overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-end justify-between mb-16 px-4">
          <div className="space-y-4">
            <h2 className="text-7xl font-black uppercase tracking-[-5px] leading-none mb-2">Global<br />Catalog</h2>
            <p className="text-sm font-medium opacity-40 uppercase tracking-widest">Enterprise Mobile Solutions Directory</p>
          </div>
          <div className="flex items-center gap-6 pb-2">
            <div className="text-right">
              <div className="text-2xl font-black italic">14,200+</div>
              <div className="text-[9px] font-black uppercase tracking-widest opacity-30 mt-1">Available SKUs</div>
            </div>
            <div className="w-px h-10 bg-black/10" />
            <div className="text-right">
               <div className="text-2xl font-black italic">100%</div>
               <div className="text-[9px] font-black uppercase tracking-widest opacity-30 mt-1">Quality Tested</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-y-auto no-scrollbar pr-4 flex-1">
          {MEGA_MENU_DATA.map((brand, idx) => (
            <motion.div 
              key={brand.brand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.2 }}
              className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all border border-black/5 hover:border-primary"
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-gray-50 group-hover:bg-primary group-hover:text-black`}>
                  {brand.brand === "Apple" ? <Smartphone className="w-6 h-6" /> :
                   brand.brand === "Samsung" ? <Laptop className="w-6 h-6" /> :
                   brand.brand === "Google" ? <Monitor className="w-6 h-6" /> :
                   <MoreHorizontal className="w-6 h-6" />}
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </div>

              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{brand.brand}</h4>
              
              <ul className="space-y-3">
                {brand.categories.slice(0, 3).map(cat => (
                  <li key={cat.name}>
                    <Link 
                      to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={onClose}
                      className="text-xs font-bold opacity-40 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100" />
                      {cat.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to={`/category/${brand.brand.toLowerCase()}`}
                    onClick={onClose}
                    className="text-[9px] font-black uppercase tracking-widest text-primary mt-2 flex items-center gap-2"
                  >
                    View Series Catalog
                  </Link>
                </li>
              </ul>
            </motion.div>
          ))}
          
          <div className="bg-primary rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative">
             <div className="absolute -right-4 -top-4 w-32 h-32 bg-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
             <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tighter leading-tight">Need custom<br />bulk quote?</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest leading-relaxed">Dedicated account manager for enterprise clients.</p>
             </div>
             <button className="h-14 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                Contact Wholesale
             </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
