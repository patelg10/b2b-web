import React from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: string;
  exVatPrice?: string;
  withoutCorePrice?: string;
  tag: string;
  image: string;
  unit: string;
  inStock?: boolean;
  colorLabel?: string;
  badgeType?: 'genuine' | 'refurb' | 'premium' | 'service';
  isFeatured?: boolean;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const isInStock = product.inStock !== false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative ${product.isFeatured ? 'bg-[#e7ffd1]' : 'bg-white'} rounded-[3rem] overflow-hidden transition-all duration-300 hover:shadow-ambient border border-gray-100 flex flex-col h-full`}
    >
      {/* Badge Section */}
      <div className="absolute top-4 left-4 z-10">
        {product.badgeType && (
          <div className="w-12 h-12 bg-black text-white rounded-full flex flex-col items-center justify-center border-2 border-white shadow-xl leading-none">
            <span className="text-[7px] font-black uppercase tracking-tighter">
              {product.badgeType === 'service' ? 'SERVICE' : product.badgeType.toUpperCase()}
            </span>
            <span className="text-[9px] font-bold italic">
               {product.badgeType === 'service' ? 'Pack' : (product.badgeType === 'genuine' ? 'Apple' : 'Parts')}
            </span>
          </div>
        )}
      </div>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden p-8 transition-colors">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </Link>

      {/* Color/Variant Label */}
      {product.colorLabel && (
        <div className="px-6">
            <div className="bg-black text-white text-[10px] font-black py-1.5 px-4 rounded-sm text-center uppercase tracking-widest shadow-sm">
                {product.colorLabel}
            </div>
        </div>
      )}

      {/* Product Info */}
      <div className="flex-1 p-6 flex flex-col items-center text-center space-y-3">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-[13px] leading-snug tracking-tight text-on-surface hover:text-[#FF3333] transition-colors line-clamp-3">
            {product.name}
          </h3>
        </Link>
        
        <div className="space-y-1">
            <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl font-black text-on-surface">{product.price}</span>
                <span className="text-[10px] font-bold text-on-surface/40 uppercase">Ex. VAT</span>
            </div>
            {product.withoutCorePrice && (
                <div className="text-[9px] font-medium text-on-surface/30">
                    Without Core: <span className="font-bold">{product.withoutCorePrice}</span> Ex. VAT
                </div>
            )}
        </div>
      </div>

      {/* Action Section */}
      <div className="p-6 pt-0 mt-auto">
        {isInStock ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center p-1 bg-surface-container-low rounded-full border border-gray-100">
               <button className="w-8 h-8 rounded-full hover:bg-white transition-colors flex items-center justify-center font-bold">-</button>
               <input type="text" value="0" className="w-12 bg-transparent text-center text-xs font-black outline-none border-none pointer-events-none" readOnly />
               <button className="w-8 h-8 rounded-full hover:bg-white transition-colors flex items-center justify-center font-bold">+</button>
            </div>
            <button className="w-full h-12 bg-[#2e7d32] text-white rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-green-900/10 active:scale-95">
                Pre-Order
            </button>
          </div>
        ) : (
          <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-2.5 text-xs font-medium outline-none focus:ring-1 focus:ring-[#FF3333] placeholder:text-on-surface/30"
              />
              <button className="w-full h-12 bg-[#df2020] text-white rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-red-900/10 active:scale-95">
                  Notify Me
              </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
