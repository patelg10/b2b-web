import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ArrowLeft, Search, Smartphone, Watch, Laptop, Monitor, MoreHorizontal } from "lucide-react";
import { MEGA_MENU_DATA } from "../data";
import { Link } from "react-router-dom";

interface SideMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenuDrawer({ isOpen, onClose }: SideMenuDrawerProps) {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  const icons = [Smartphone, Laptop, Monitor, Watch, MoreHorizontal, Smartphone, Laptop, Smartphone];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
          />
          
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full max-w-[450px] bg-white z-[120] shadow-2xl flex"
          >
            {/* Primary Panel */}
            <div className={`flex-1 flex flex-col transition-all duration-500 ${activeBrand !== null ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="p-8 border-b border-black/5 flex items-center justify-between">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-primary">Explorer</h2>
                <button onClick={onClose} className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="relative mb-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
                  <input 
                    type="text" 
                    placeholder="Quick search parts..." 
                    className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold border-none outline-none focus:ring-2 focus:ring-primary h-14 shadow-inner"
                  />
                </div>

                <nav className="space-y-2 overflow-y-auto no-scrollbar max-h-[calc(100vh-250px)] pr-2">
                  <div className="text-[10px] font-black uppercase tracking-[3px] opacity-20 mb-4 px-4">Categories</div>
                  {MEGA_MENU_DATA.map((brand, idx) => (
                    <button
                      key={brand.brand}
                      onClick={() => setActiveBrand(idx)}
                      className="w-full group flex items-center justify-between p-4 rounded-[1.5rem] bg-gray-50 hover:bg-black hover:text-white transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center group-hover:bg-primary transition-colors">
                           {React.createElement(icons[idx % icons.length], { className: "w-5 h-5" })}
                        </div>
                        <span className="text-sm font-black uppercase tracking-tight">{brand.brand}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-8 bg-gray-50 border-t border-black/5">
                 <div className="flex items-center justify-between">
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Ready to help</div>
                       <div className="text-sm font-bold">24/7 Tech Support</div>
                    </div>
                    <button className="h-12 px-6 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                       Contact
                    </button>
                 </div>
              </div>
            </div>

            {/* Sub-level Sliding Panel */}
            <AnimatePresence>
              {activeBrand !== null && (
                <motion.div 
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="absolute inset-0 bg-white z-10 flex flex-col"
                >
                  <div className="p-8 border-b border-black/5 flex items-center gap-6">
                    <button 
                      onClick={() => setActiveBrand(null)}
                      className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all bg-gray-50"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-30 leading-none">Browsing</div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter leading-tight">{MEGA_MENU_DATA[activeBrand].brand}</h2>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 space-y-12 no-scrollbar">
                    {MEGA_MENU_DATA[activeBrand].categories.map((cat) => (
                      <div key={cat.name} className="space-y-6">
                        <div className="flex items-center gap-4">
                           <h3 className="text-xs font-black uppercase tracking-[3px] text-primary">{cat.name}</h3>
                           <div className="h-px flex-1 bg-black/5" />
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {cat.items.map(item => (
                            <Link 
                              key={item.name}
                              to="/shop" 
                              onClick={onClose}
                              className="group flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-black/5"
                            >
                              <span className="text-sm font-bold opacity-60 group-hover:opacity-100 group-hover:text-black">{item.name}</span>
                              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-black text-white text-center">
                     <button onClick={onClose} className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                        View Entire {MEGA_MENU_DATA[activeBrand].brand} Catalog
                     </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
