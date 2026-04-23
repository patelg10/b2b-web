import React, { useState } from "react";
import { motion } from "motion/react";
import { ShoppingBag, ChevronRight, Share2, Heart, ShieldCheck, Truck, RefreshCcw } from "lucide-react";
import MerchandiseSection from "../components/MerchandiseSection";
import { MOCK_PRODUCTS } from "../data";

export default function ProductDetailsPage() {
  const product = MOCK_PRODUCTS[0]; // Just showing the first one for the demo
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=600",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=600"
  ];

  return (
    <div className="bg-surface">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-10 py-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-30">
        <a href="/" className="hover:opacity-100 transition-opacity">Home</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/category/iphone" className="hover:opacity-100 transition-opacity">iPhone</a>
        <ChevronRight className="w-3 h-3" />
        <span className="opacity-100 text-on-surface">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
        
        {/* Left: Image Slider (7 cols) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                  activeImage === idx ? "border-primary opacity-100" : "border-transparent opacity-40 hover:opacity-100"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <motion.div 
            key={activeImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 aspect-square rounded-[3rem] overflow-hidden bg-white shadow-ambient order-1 md:order-2"
          >
            <img src={images[activeImage]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* Right: Info (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
              {product.tag}
            </div>
            <h1 className="text-5xl font-extrabold tracking-[-3px] leading-none mb-4 uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-6">
              <p className="text-4xl font-bold text-primary">
                {product.price}
              </p>
              <div className="h-6 w-px bg-on-surface/10" />
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-xs font-bold opacity-30 mt-1">4.9 (128 Reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-on-surface/60 leading-relaxed max-w-md">
            The flagship performance you deserve. This certified refurbished device has been meticulously tested and restored using original parts. Experience perfection with guaranteed 95%+ battery health.
          </p>

          <div className="space-y-4 pt-6 border-t border-on-surface/5">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Choose Storage</h4>
            <div className="flex gap-3">
              {["128GB", "256GB", "512GB"].map(s => (
                <button key={s} className={`px-6 py-3 rounded-full text-xs font-bold transition-all border-2 ${
                  s === "256GB" ? "bg-primary border-primary text-black shadow-lg" : "bg-white border-on-surface/5 text-on-surface/60 hover:border-primary/20"
                }`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-8">
            <button className="pill-button-primary flex-1 h-16 flex items-center justify-center gap-3 text-sm uppercase tracking-widest">
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="w-16 h-16 rounded-full border-2 border-on-surface/5 flex items-center justify-center hover:bg-primary/5 hover:border-primary/20 transition-all text-on-surface opacity-60">
              <Heart className="w-6 h-6" />
            </button>
            <button className="w-16 h-16 rounded-full border-2 border-on-surface/5 flex items-center justify-center hover:bg-primary/5 hover:border-primary/20 transition-all text-on-surface opacity-60">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-on-surface/5">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[12px] font-bold uppercase tracking-widest mb-1">12 Month Warranty</h5>
                <p className="text-[10px] opacity-40">Full coverage on all hardware.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-[12px] font-bold uppercase tracking-widest mb-1">express shipping</h5>
                <p className="text-[10px] opacity-40">Next day delivery available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross Sell Section */}
      <section className="bg-surface-container-low mt-12 py-12">
        <MerchandiseSection 
          title="Similar Essentials" 
          subtitle="Curated matching devices and professional grade accessories." 
        />
      </section>
    </div>
  );
}
