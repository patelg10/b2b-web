import React from "react";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, Chrome } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-6 bg-surface">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-surface-container-low p-10 rounded-[2.5rem] shadow-ambient"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-[-2px] mb-3">Welcome Back.</h1>
          <p className="text-sm text-on-surface opacity-60">Log in to your curator account.</p>
        </div>

        <div className="space-y-6">
          {/* Google Login */}
          <button className="w-full h-14 bg-white border border-on-surface/5 rounded-full flex items-center justify-center gap-3 font-semibold text-sm hover:bg-surface-container-lowest transition-all hover:shadow-sm">
            <Chrome className="w-5 h-5 text-primary" />
            Sign in with Google
          </button>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-on-surface/10"></div>
            <span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest opacity-30 text-on-surface">or</span>
            <div className="flex-grow border-t border-on-surface/10"></div>
          </div>

          {/* Regular Login */}
          <div className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all" />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full h-14 bg-white rounded-full pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary outline-none border-none shadow-sm transition-all"
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all" />
              <input 
                type="password" 
                placeholder="Password"
                className="w-full h-14 bg-white rounded-full pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary outline-none border-none shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70">Forgot Password?</a>
          </div>

          <button className="pill-button-primary w-full h-14 flex items-center justify-center gap-2 text-sm uppercase tracking-widest leading-none">
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-xs font-medium text-on-surface opacity-60 mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
