import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { MEGA_MENU_DATA } from "../data";
import MegaMenu from "./MegaMenu";

export default function BrandNav() {
  const [activeBrandIdx, setActiveBrandIdx] = useState<number | null>(null);

  return (
    <div 
      className="bg-surface-container-low h-12 flex items-center relative z-40 border-b border-on-surface/5"
      onMouseLeave={() => setActiveBrandIdx(null)}
    >
      <div className="max-w-7xl mx-auto px-10 w-full">
        <ul className="flex items-center gap-10">
          {MEGA_MENU_DATA.map((brandData, index) => (
            <motion.li 
              key={brandData.brand}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setActiveBrandIdx(index)}
              className="flex-shrink-0 h-full flex items-center"
            >
              <Link 
                to={`/category/${brandData.brand.toLowerCase().replace(" ", "-")}`}
                className={`text-[11px] font-black tracking-[1.5px] uppercase transition-all duration-300 py-3 block border-b-2 ${
                  activeBrandIdx === index ? "text-black border-primary opacity-100" : "text-on-surface opacity-50 border-transparent hover:opacity-100"
                }`}
              >
                {brandData.brand}
              </Link>
            </motion.li>
          ))}
          
          <motion.li 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Link to="/category/parts" className="text-[11px] font-black tracking-[1.5px] uppercase text-on-surface opacity-50 transition-all py-3 block hover:text-black hover:opacity-100">
              Genuine Parts
            </Link>
          </motion.li>

          <motion.li 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex-shrink-0"
          >
            <Link to="/category/accessories" className="text-[11px] font-black tracking-[1.5px] uppercase text-on-surface opacity-50 transition-all py-3 block hover:text-black hover:opacity-100">
              Accessories
            </Link>
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
      </AnimatePresence>
    </div>
  );
}
