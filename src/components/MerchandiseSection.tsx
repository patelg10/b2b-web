import React from "react";
import ProductCard, { Product } from "./ProductCard";

const BEST_SELLERS: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro - 256GB Platinum Gold",
    price: "$899.00",
    tag: "Certified",
    image: "https://images.unsplash.com/photo-1696426543122-1d573c50978d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra Phantom Cream",
    price: "$949.00",
    tag: "Open Box",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro Obsidian (Renewed)",
    price: "$699.00",
    tag: "Best Value",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "iPhone 14 Plus - 128GB Midnight",
    price: "$599.00",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=600&auto=format&fit=crop"
  }
];

export default function MerchandiseSection({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-10">
      <div className="flex flex-col mb-10">
        <h3 className="text-[11px] uppercase tracking-[2px] font-bold opacity-60 mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-on-surface opacity-70 font-medium max-w-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BEST_SELLERS.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
