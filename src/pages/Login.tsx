import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, Chrome, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/apiService";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await loginApi({ 
        email, 
        password, 
        device_name: "web_app" 
      });
      login(response);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-6 bg-surface">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-surface-container-low p-10 rounded-[2.5rem] shadow-ambient"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-[-2px] mb-3">Welcome Back.</h1>
          <p className="text-sm text-on-surface opacity-60">Log in to your account.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-500 text-xs font-bold rounded-2xl">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Regular Login */}
          <div className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black group-focus-within:opacity-100 transition-all" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full h-14 bg-white rounded-full pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary outline-none border-none shadow-sm transition-all"
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:text-black group-focus-within:opacity-100 transition-all" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full h-14 bg-white rounded-full pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary outline-none border-none shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-black/60 hover:text-black hover:underline">Forgot Password?</a>
          </div>

          <button 
            disabled={loading}
            className="pill-button-primary w-full h-14 flex items-center justify-center gap-2 text-sm uppercase tracking-widest leading-none disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <p className="text-center text-xs font-medium text-on-surface opacity-60 mt-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-black font-bold hover:underline">Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
}
