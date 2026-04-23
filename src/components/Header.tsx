import { Search, User, UserPlus, ShoppingBag, PhoneCall, Info } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-display text-2xl font-black tracking-[-1.5px] text-black">
            CURATOR<span className="text-primary">.</span>
          </Link>
        </div>

        {/* Middle: Search & Account */}
        <div className="hidden md:flex flex-1 max-w-xl mx-12 items-center gap-4 bg-surface-container-low rounded-full px-4 py-2 border-transparent">
          <Search className="w-4 h-4 text-on-surface opacity-30" />
          <input 
            type="text" 
            placeholder="Search phones, parts, accessories..." 
            className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-on-surface/30"
          />
          <div className="h-6 w-px bg-on-surface opacity-10 mx-2" />
          <Link to="/login" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:opacity-70 transition-all">
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
          <Link to="/register" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest bg-primary text-black rounded-full px-5 py-1.5 hover:brightness-95 transition-all shadow-sm">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Signup</span>
          </Link>
        </div>

        {/* Right: Utility & Cart */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-[2px] opacity-40">
            <a href="/contact" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <PhoneCall className="w-3.5 h-3.5" />
              Contact
            </a>
            <a href="/about" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <Info className="w-3.5 h-3.5" />
              About
            </a>
          </nav>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="relative p-2 text-on-surface hover:opacity-70 transition-all group"
          >
            <ShoppingBag className="w-6 h-6 group-hover:text-black transition-colors" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary text-black text-[9px] font-black flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
              0
            </div>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
