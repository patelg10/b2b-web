import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[340px] flex items-center overflow-hidden bg-surface">
      {/* Sleek Theme Organic Shape */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[420px] h-[300px] bg-[#e2d9c4] rounded-[60%_40%_70%_30%/40%_50%_60%_50%] z-1 opacity-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-20 w-full relative z-10">
        <div className="max-w-[500px] space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[72px] font-bold leading-[0.9] tracking-[-3px] mb-5">
              Refurbished.<br />
              Refined.
            </h1>
            <p className="text-sm text-on-surface/80 max-w-sm leading-relaxed mb-6">
              Premium tech components and devices, curated for the modern digital professional.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="pill-button-primary uppercase tracking-wider text-[14px]">
              Explore Collection
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Image Positioning */}
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1200&auto=format&fit=crop" 
            alt="Premium Refurbished" 
            className="w-[240px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
