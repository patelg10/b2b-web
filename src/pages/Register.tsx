import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Briefcase, Mail, Lock, ArrowRight, Building, Hash, Receipt, Loader2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { register as registerApi } from "../services/apiService";

type RegisterType = "customer" | "business";

export default function RegisterPage() {
  const [type, setType] = useState<RegisterType>("customer");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    company_name: "",
    company_number: "",
    vat_number: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const isBusiness = type === "business";
      const payload: any = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        user_type: isBusiness ? "b2b" : "b2c",
      };

      if (isBusiness) {
        payload.company_name = formData.company_name;
        payload.company_number = formData.company_number;
        payload.vat_number = formData.vat_number;
      }

      await registerApi(payload);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-24 px-6 bg-surface">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-surface-container-low p-16 rounded-[3rem] shadow-ambient text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold tracking-[-1px] mb-4">Registration Successful!</h1>
          <p className="text-sm text-on-surface opacity-60 leading-relaxed mb-10">
            Thank you for joining us. You are registered successfully, our team will get back to you for further processing.
          </p>
          <Link to="/login" className="pill-button-primary inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest">
            Back to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 px-6 bg-surface">
      <div className="w-full max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low p-10 md:p-16 rounded-[3rem] shadow-ambient"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold tracking-[-3px] mb-4">Join B2B Sentrix.</h1>
            <p className="text-sm text-on-surface opacity-60">Select your account type to begin.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 text-red-500 text-xs font-bold rounded-2xl">
              {error}
            </div>
          )}

          {/* Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <button 
              type="button"
              onClick={() => setType("customer")}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-all ${
                type === "customer" 
                ? "bg-primary text-black shadow-lg" 
                : "bg-white text-on-surface opacity-60 hover:opacity-100"
              }`}
            >
              <User className="w-6 h-6 mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Customer (B2C)</span>
            </button>
            <button 
              type="button"
              onClick={() => setType("business")}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-all ${
                type === "business" 
                ? "bg-primary text-black shadow-lg" 
                : "bg-white text-on-surface opacity-60 hover:opacity-100"
              }`}
            >
              <Briefcase className="w-6 h-6 mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Business (B2B)</span>
            </button>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
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
                  <input 
                    type="text" 
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    className="register-input" 
                  />
                </div>
                <div className="relative group md:col-span-1">
                  <input 
                    type="text" 
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    className="register-input" 
                  />
                </div>
                
                <div className="relative group md:col-span-2">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    className="register-input pl-14" 
                  />
                </div>

                {/* Business Specific Fields */}
                {type === "business" && (
                  <>
                    <div className="relative group md:col-span-2">
                      <Building className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                      <input 
                        type="text" 
                        name="company_name"
                        required={type === "business"}
                        value={formData.company_name}
                        onChange={handleInputChange}
                        placeholder="Company Name" 
                        className="register-input pl-14" 
                      />
                    </div>
                    <div className="relative group md:col-span-1">
                      <Hash className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                      <input 
                        type="text" 
                        name="company_number"
                        required={type === "business"}
                        value={formData.company_number}
                        onChange={handleInputChange}
                        placeholder="Company Number" 
                        className="register-input pl-14" 
                      />
                    </div>
                    <div className="relative group md:col-span-1">
                      <Receipt className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                      <input 
                        type="text" 
                        name="vat_number"
                        required={type === "business"}
                        value={formData.vat_number}
                        onChange={handleInputChange}
                        placeholder="VAT Number" 
                        className="register-input pl-14" 
                      />
                    </div>
                  </>
                )}

                <div className="relative group md:col-span-1">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                  <input 
                    type="password" 
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password" 
                    className="register-input pl-14" 
                  />
                </div>
                <div className="relative group md:col-span-1">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black transition-all" />
                  <input 
                    type="password" 
                    name="password_confirmation"
                    required
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    placeholder="Confirm Password" 
                    className="register-input pl-14" 
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 px-2">
              <input type="checkbox" required id="terms" className="w-5 h-5 rounded-lg accent-primary border-none bg-white shadow-sm cursor-pointer" />
              <label htmlFor="terms" className="text-xs font-medium text-on-surface opacity-60">
                I agree to the <a href="#" className="text-black font-bold hover:underline transition-colors">Terms & Conditions</a> and Privacy Policy.
              </label>
            </div>

            <button 
              disabled={loading}
              className="pill-button-primary w-full h-16 flex items-center justify-center gap-2 text-sm uppercase tracking-widest leading-none mt-10 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : `Create ${type} Account`}
              {!loading && <ArrowRight className="w-4 h-4" />}
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
