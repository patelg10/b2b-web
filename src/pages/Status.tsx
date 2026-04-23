import React from "react";
import { CheckCircle2, ChevronRight, Package, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function OrderSuccessPage() {
  const orderNumber = "MX-" + Math.floor(1000 + Math.random() * 9000);

  return (
    <div className="bg-surface min-h-[80vh] flex items-center justify-center py-24 px-10">
      <div className="max-w-xl w-full text-center space-y-12">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-primary/30"
        >
          <CheckCircle2 className="w-16 h-16 text-black" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">Order <span className="text-primary italic">Confirmed!</span></h1>
          <p className="text-sm font-medium opacity-40 max-w-sm mx-auto">
            Your inventory is locked in. We've sent a full confirmation and VAT invoice to your registered email.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-on-surface/5 space-y-6">
           <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black uppercase tracking-[3px] opacity-30">Order Number</span>
              <span className="text-xl font-black">{orderNumber}</span>
           </div>
           <div className="h-px bg-gray-50 w-full" />
           <p className="text-[11px] font-bold opacity-30 leading-relaxed italic">
             Estimated Delivery: Next Business Day
           </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/account" className="pill-button-primary h-14 px-10 flex items-center gap-3 uppercase tracking-widest text-xs">
            <Package className="w-4 h-4" />
            Track Order
          </Link>
          <Link to="/" className="pill-button-outline h-14 px-10 flex items-center gap-3 uppercase tracking-widest text-xs border-on-surface/10">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export function OrderErrorPage() {
  return (
    <div className="bg-surface min-h-[80vh] flex items-center justify-center py-24 px-10">
      <div className="max-w-xl w-full text-center space-y-12">
        <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-16 h-16 text-red-500 rotate-[135deg]" /> {/* Mock error icon */}
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">Payment <span className="text-red-500 italic">Auth Failed</span></h1>
          <p className="text-sm font-medium opacity-40 max-w-sm mx-auto">
            We couldn't authorize your trade account for this transaction. Please check your credit balance or try a different payment method.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/checkout" className="pill-button-primary h-14 px-10 flex items-center gap-3 uppercase tracking-widest text-xs">
            Retry Checkout
          </Link>
          <Link to="/contact" className="pill-button-outline h-14 px-10 flex items-center gap-3 uppercase tracking-widest text-xs border-on-surface/10">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
