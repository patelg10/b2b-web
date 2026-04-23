import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, Tag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, discount, couponCode, setCoupon } = useCart();
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [tempCoupon, setTempCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  const handleApplyCoupon = () => {
    if (tempCoupon === "B2B10") {
      setCoupon("B2B10");
      setIsCouponModalOpen(false);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code. Try 'B2B10'");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8">
        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
            <Trash2 className="w-12 h-12 text-gray-300" />
        </div>
        <div className="text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Your cart is empty</h2>
            <p className="text-sm opacity-40 mt-2">Looks like you haven't added anything yet.</p>
        </div>
        <Link to="/" className="pill-button-primary px-10 py-4 h-auto uppercase tracking-widest text-xs">
            Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black tracking-[-4px] uppercase mb-16">Your Shopping <span className="text-primary italic">Cart</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {cartItems.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                className="bg-white rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-on-surface/5"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-1 space-y-1 text-center md:text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-black px-2 py-0.5 rounded-full">{item.tag}</span>
                  <h3 className="text-lg font-bold tracking-tight text-on-surface">{item.name}</h3>
                  <p className="text-xs font-medium opacity-40">{item.unit}</p>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 rounded-full p-1 border border-gray-100">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-black">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-xl font-black">{item.price}</p>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-black text-white rounded-[3rem] p-10 shadow-2xl space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium opacity-60">
                   <span>Subtotal</span>
                   <span>£{(cartTotal + discount).toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center text-sm font-bold text-primary">
                    <span>Discount (B2B10)</span>
                    <span>-£{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm font-medium opacity-60">
                   <span>Tax (20%)</span>
                   <span>£0.00 (Ex. VAT)</span>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex justify-between items-end">
                   <div>
                     <span className="text-[10px] font-black uppercase tracking-[2px] opacity-40 block">Estimated Total</span>
                     <span className="text-4xl font-black text-primary italic">£{cartTotal.toFixed(2)}</span>
                   </div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setIsCouponModalOpen(true)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest">{couponCode || "Apply Coupon"}</span>
                  </div>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link 
                  to="/checkout" 
                  className="pill-button-primary w-full h-16 flex items-center justify-center uppercase tracking-widest text-sm"
                >
                  Checkout
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 space-y-4 border border-on-surface/5">
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Safe & Secure Payment</p>
                <div className="flex gap-4 opacity-30 grayscale items-center">
                    <span className="text-xs font-black">VISA</span>
                    <span className="text-xs font-black">MASTERCARD</span>
                    <span className="text-xs font-black italic">PayPal</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Modal */}
      <AnimatePresence>
        {isCouponModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCouponModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-[3rem] p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsCouponModalOpen(false)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                  <Tag className="w-8 h-8 text-black" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Apply Coupon</h3>
                  <p className="text-xs font-medium opacity-40">Enter your code for exclusive discounts.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Enter code (e.g. B2B10)"
                      value={tempCoupon}
                      onChange={(e) => {
                        setTempCoupon(e.target.value);
                        setCouponError("");
                      }}
                      className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    {couponError && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{couponError}</p>}
                  </div>
                  
                  <button 
                    onClick={handleApplyCoupon}
                    className="pill-button-primary w-full h-14 uppercase tracking-widest text-xs"
                  >
                    Validate Coupon
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
