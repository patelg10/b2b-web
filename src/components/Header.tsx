import { Search, User, UserPlus, ShoppingBag, PhoneCall, Info } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-header w-full">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-display text-2xl font-extrabold tracking-tighter text-primary">
            CURATOR.
          </Link>
        </div>

        {/* Middle: Search & Account */}
        <div className="hidden md:flex flex-1 max-w-xl mx-12 items-center gap-4 bg-surface-container-low rounded-full px-4 py-2 border-transparent">
          <Search className="w-5 h-5 text-on-surface opacity-40" />
          <input 
            type="text" 
            placeholder="Search phones, parts, accessories..." 
            className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-on-surface/40"
          />
          <div className="h-6 w-px bg-on-surface opacity-10 mx-2" />
          <Link to="/login" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <User className="w-4 h-4" />
            <span>Login</span>
          </Link>
          <Link to="/register" className="flex items-center gap-2 text-sm font-semibold bg-primary text-white rounded-full px-4 py-1.5 hover:opacity-90 transition-opacity">
            <UserPlus className="w-4 h-4" />
            <span>Signup</span>
          </Link>
        </div>

        {/* Right: Utility & Cart */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium opacity-70">
            <a href="/contact" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <PhoneCall className="w-4 h-4" />
              Contact
            </a>
            <a href="/about" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Info className="w-4 h-4" />
              About
            </a>
          </nav>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="relative p-2 text-on-surface hover:text-primary transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
              0
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
