import { Search, User, UserPlus, ShoppingBag, PhoneCall, Info } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10 w-full shadow-2xl">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-display text-2xl font-black tracking-[-1.5px] text-white">
            B2B<span className="text-primary italic">S</span>ENTRIX<span className="opacity-20">.</span>
          </Link>
        </div>

        {/* Middle: Search & Account */}
        <div className="hidden md:flex flex-1 max-w-xl mx-12 items-center gap-4 bg-white/5 rounded-full px-4 py-2 border-transparent hover:bg-white/10 transition-colors text-white">
          <Search className="w-4 h-4 text-white opacity-40" />
          <input 
            type="text" 
            placeholder="Search phones, parts, accessories..." 
            className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-white/20 text-white"
          />
          <div className="h-6 w-px bg-white/10 mx-2" />
          <Link to="/login" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all whitespace-nowrap">
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
          <Link to="/register" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest bg-primary text-black rounded-full px-5 py-1.5 hover:brightness-95 transition-all shadow-lg whitespace-nowrap">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Signup</span>
          </Link>
        </div>

        {/* Right: Utility & Cart */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-[2px] opacity-40 text-white">
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
            className="group flex items-center gap-3 bg-primary text-black transition-all px-4 py-2 rounded-full shadow-lg"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-black" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-black text-primary text-[9px] font-black flex items-center justify-center rounded-full shadow-sm ring-2 ring-primary">
                0
              </div>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Cart</span>
              <span className="text-[12px] font-bold tracking-tight">£0.00</span>
            </div>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
