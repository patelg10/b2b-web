import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { MOCK_PRODUCTS } from "../data";
import { ChevronLeft, ChevronRight, List as ListIcon } from "lucide-react";

export default function MerchandiseSection({ title, subtitle }: { title: string; subtitle?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const BEST_SELLERS = MOCK_PRODUCTS;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-10 relative group">
      <div className="flex items-end justify-between mb-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <ListIcon className="w-5 h-5 text-[#df2020] stroke-[3px]" />
            <h3 className="text-lg font-black uppercase tracking-tight text-[#df2020]">
              {title}
            </h3>
          </div>
          {subtitle && (
            <p className="text-sm font-medium opacity-50 max-w-lg leading-snug">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white hover:bg-primary transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white hover:bg-primary transition-all shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
      >
        {BEST_SELLERS.map((product) => (
          <div key={product.id} className="min-w-[320px] w-[320px] snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
