import React from "react";
import { motion } from "motion/react";
import { ShoppingCart, Heart } from "lucide-react";

import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: string;
  tag: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-surface-container-lowest rounded-2xl p-5 transition-all duration-300 hover:bg-accent-hover hover:shadow-ambient flex items-center gap-5 border-none"
    >
      {/* Product Image - Small Square */}
      <Link to={`/product/${product.id}`} className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl bg-surface">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </Link>

      {/* Product Info - Side by Side */}
      <div className="flex-1 space-y-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface opacity-40 mb-1">
          {product.tag}
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-display font-bold text-base leading-tight hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-lg font-bold text-primary">
          {product.price}
        </p>
      </div>

      {/* Compact Add Button */}
      <button className="p-3 bg-on-surface text-white rounded-full hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300 shadow-lg">
        <ShoppingCart className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default ProductCard;
