import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Briefcase, Mail, Lock, ArrowRight, Building, Hash, Receipt } from "lucide-react";
import { Link } from "react-router-dom";

type RegisterType = "customer" | "business";

export default function RegisterPage() {
  const [type, setType] = useState<RegisterType>("customer");

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 px-6 bg-surface">
      <div className="w-full max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low p-10 md:p-16 rounded-[3rem] shadow-ambient"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold tracking-[-3px] mb-4">Join Curator.</h1>
            <p className="text-sm text-on-surface opacity-60">Select your account type to begin.</p>
          </div>

          {/* Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <button 
              onClick={() => setType("customer")}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-all ${
                type === "customer" 
                ? "bg-primary text-black shadow-lg" 
                : "bg-white text-on-surface opacity-60 hover:opacity-100"
              }`}
            >
              <User className="w-6 h-6 mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Customer</span>
            </button>
            <button 
              onClick={() => setType("business")}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-all ${
                type === "business" 
                ? "bg-primary text-black shadow-lg" 
                : "bg-white text-on-surface opacity-60 hover:opacity-100"
              }`}
            >
              <Briefcase className="w-6 h-6 mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Business</span>
            </button>
          </div>

          <form className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={type}
                initial={{ opacity: 0, x: type === "customer" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: type === "customer" ? 20 : -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Common Fields */}
                <div className="relative group md:col-span-1">
                  <input type="text" placeholder="First Name" className="register-input" />
                </div>
                <div className="relative group md:col-span-1">
                  <input type="text" placeholder="Last Name" className="register-input" />
                </div>
                
                <div className="relative group md:col-span-2">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                  <input type="email" placeholder="Email Address" className="register-input pl-14" />
                </div>

                {/* Business Specific Fields */}
                {type === "business" && (
                  <>
                    <div className="relative group md:col-span-2">
                      <Building className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                      <input type="text" placeholder="Company Name" className="register-input pl-14" />
                    </div>
                    <div className="relative group md:col-span-1">
                      <Hash className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                      <input type="text" placeholder="Company Number" className="register-input pl-14" />
                    </div>
                    <div className="relative group md:col-span-1">
                      <Receipt className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                      <input type="text" placeholder="VAT Number (Optional)" className="register-input pl-14" />
                    </div>
                  </>
                )}

                <div className="relative group md:col-span-1">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                  <input type="password" placeholder="Password" className="register-input pl-14" />
                </div>
                <div className="relative group md:col-span-1">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                  <input type="password" placeholder="Confirm Password" className="register-input pl-14" />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 px-2">
              <input type="checkbox" id="terms" className="w-5 h-5 rounded-lg accent-primary border-none bg-white shadow-sm cursor-pointer" />
              <label htmlFor="terms" className="text-xs font-medium text-on-surface opacity-60">
                I agree to the <a href="#" className="text-black font-bold hover:underline transition-colors">Terms & Conditions</a> and Privacy Policy.
              </label>
            </div>

            <button className="pill-button-primary w-full h-16 flex items-center justify-center gap-2 text-sm uppercase tracking-widest leading-none mt-10">
              Create {type} Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-xs font-medium text-on-surface opacity-60 mt-10">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-bold hover:underline">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
