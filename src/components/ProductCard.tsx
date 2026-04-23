import React from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: string;
  tag: string;
  image: string;
  unit: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-ambient border border-gray-100 flex flex-col h-full"
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="relative block h-48 overflow-hidden p-6 hover:bg-surface-container-low transition-colors">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter shadow-sm">
            {product.tag}
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="flex-1 p-6 flex flex-col items-center text-center space-y-2">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-sm tracking-tight hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="text-[11px] font-medium text-gray-400">
          {product.unit}
        </div>
        <div className="text-lg font-black text-on-surface pt-1">
          {product.price}
        </div>
      </div>

      {/* Add Button Bar (Reference styled as blue bar) */}
      <button className="w-full h-12 bg-[#2a4596] text-white flex items-center justify-center hover:bg-[#1e3271] transition-colors group/btn">
        <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center group-hover/btn:scale-110 transition-transform">
          <Plus className="w-4 h-4 stroke-[3px]" />
        </div>
      </button>
    </motion.div>
  );
};

export default ProductCard;
