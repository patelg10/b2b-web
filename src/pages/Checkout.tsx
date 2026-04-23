import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { ChevronLeft, CreditCard, Truck, ShieldCheck, Mail, ArrowRight, Tag, X, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function CheckoutPage() {
  const { cartItems, cartTotal, discount, couponCode, setCoupon, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
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

  const handleOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      const success = Math.random() > 0.05; // 5% chance of error for demo
      if (success) {
        navigate("/success");
      } else {
        navigate("/error");
      }
    }, 2000);
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="bg-surface py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <Link to="/cart" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] opacity-40 hover:opacity-100 transition-all mb-12">
            <ChevronLeft className="w-4 h-4" />
            Back to Cart
        </Link>
        
        <h1 className="text-6xl font-black tracking-[-4px] uppercase mb-16">Secure <span className="text-primary italic">Checkout</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Checkout Form */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Shipping Info */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-primary rounded-full flex items-center justify-center shadow-lg">
                  <Truck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Shipping Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 px-6">Company Name</label>
                  <input type="text" placeholder="e.g. Tech Solutions Ltd" className="w-full h-14 bg-white border border-on-surface/5 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 px-6">VAT Number</label>
                  <input type="text" placeholder="GB12345678" className="w-full h-14 bg-white border border-on-surface/5 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 px-6">Address Line 1</label>
                  <input type="text" placeholder="Street Address" className="w-full h-14 bg-white border border-on-surface/5 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 px-6">City</label>
                  <input type="text" className="w-full h-14 bg-white border border-on-surface/5 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 px-6">Postal Code</label>
                  <input type="text" className="w-full h-14 bg-white border border-on-surface/5 rounded-2xl px-6 font-medium focus:ring-2 focus:ring-primary outline-none" />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-primary rounded-full flex items-center justify-center shadow-lg">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Payment Method</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="flex items-center justify-between p-6 rounded-[2rem] bg-white border-2 border-primary shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full border-4 border-primary bg-black" />
                    <div>
                        <span className="text-sm font-black uppercase block">Trade Account</span>
                        <span className="text-[10px] opacity-40 uppercase font-bold tracking-widest">30-Day Terms</span>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </button>
                <button className="flex items-center justify-between p-6 rounded-[2rem] bg-gray-50 border-2 border-transparent opacity-60 hover:opacity-100 transition-all grayscale hover:grayscale-0">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    <div>
                        <span className="text-sm font-black uppercase block">Card / PayPal</span>
                        <span className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Immediate Payment</span>
                    </div>
                  </div>
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-black text-white rounded-[3rem] p-10 shadow-2xl space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-black uppercase tracking-tighter">Your Order</h3>
                <div className="space-y-4 max-h-[300px] overflow-y-auto no-scrollbar pr-2">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 p-1">
                           <img src={item.image} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold tracking-tight line-clamp-1">{item.name}</p>
                          <p className="text-[9px] opacity-40">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-sm font-black">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/10 w-full" />

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs opacity-60">
                   <span>Subtotal</span>
                   <span>£{(cartTotal + discount).toFixed(2)}</span>
                </div>
                {discount > 0 && (
                   <div className="flex justify-between items-center text-xs text-primary font-black">
                      <span>Discount applied</span>
                      <span>-£{discount.toFixed(2)}</span>
                   </div>
                )}
                <div className="flex justify-between items-center text-xl font-black italic">
                   <span className="text-primary tracking-widest uppercase text-xs opacity-40 not-italic">Total Payable</span>
                   <span>£{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setIsCouponModalOpen(true)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{couponCode || "Redeem Code"}</span>
                  </div>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  disabled={isProcessing}
                  onClick={handleOrder}
                  className="pill-button-primary w-full h-16 flex items-center justify-center uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isProcessing ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                      <RefreshCcw className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      Place Order
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4 px-8">
               <div className="flex gap-4 items-center opacity-40">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Enterprise Bank Security</span>
               </div>
               <div className="flex gap-4 items-center opacity-40">
                  <Mail className="w-5 h-5" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Order confirmation via email</span>
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

function RefreshCcw(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}
