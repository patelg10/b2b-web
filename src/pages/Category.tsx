import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ChevronDown, Filter, LayoutGrid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { MOCK_PRODUCTS } from "../data";

export default function CategoryPage() {
  const [sortBy, setSortBy] = useState<"name" | "price">("name");
  
  const sortedProducts = useMemo(() => {
    return [...MOCK_PRODUCTS].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      }
    });
  }, [sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
        
        {/* Sidebar: 30% (3/10) */}
        <aside className="lg:col-span-3 space-y-12">
          <div>
            <h1 className="text-4xl font-bold tracking-[-2px] mb-4 uppercase">iPhone</h1>
            <p className="text-sm text-on-surface opacity-50">Showing {sortedProducts.length} premium devices</p>
          </div>

          <div className="space-y-8">
            <FilterGroup title="Condition" options={["Certified Refurbished", "Open Box", "Renewed"]} />
            <FilterGroup title="Storage" options={["128GB", "256GB", "512GB", "1TB"]} />
            <FilterGroup title="Color" options={["Titanium", "Space Black", "Natural", "Silver"]} />
            <FilterGroup title="Price Range" options={["Under $500", "$500 - $800", "$800+"]} />
          </div>
        </aside>

        {/* Main Content: 70% (7/10) */}
        <main className="lg:col-span-7">
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-on-surface/5">
            <div className="flex items-center gap-6">
              <span className="text-[12px] font-bold uppercase tracking-widest opacity-40">View As</span>
              <div className="flex gap-2">
                <button className="p-2 bg-primary text-white rounded-lg shadow-sm"><LayoutGrid className="w-4 h-4" /></button>
                <button className="p-2 bg-white text-on-surface/40 rounded-lg"><List className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[12px] font-bold uppercase tracking-widest opacity-40">Sort By</span>
              <div className="relative group">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-surface-container-low border-none rounded-full px-6 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-primary outline-none pr-12 cursor-pointer transition-all"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price">Price (Low to High)</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Product Grid - 3 items per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col"
              >
                {/* Custom version of ProductCard if needed, but the user asked for grid view */}
                {/* I'll use the existing ProductCard component which I updated to horizontal previously, 
                    actually the user request says "grid view, 3 items per row".
                    Previously I changed ProductCard to horizontal for the Sleek theme.
                    I should probably make it flexible or revert to grid for category.
                */}
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="text-[12px] font-extrabold uppercase tracking-[2px] text-on-surface opacity-40 border-b border-on-surface/5 pb-2">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-lg bg-white shadow-sm border-none checked:bg-primary transition-all" />
              <div className="absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            <span className="text-sm font-medium text-on-surface opacity-60 group-hover:opacity-100 transition-opacity">
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
