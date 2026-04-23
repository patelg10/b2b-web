import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface h-[60px] flex items-center justify-between px-20 border-t border-on-surface/5">
      <div className="text-[12px] font-medium text-on-surface opacity-80 uppercase tracking-wider">
        &copy; 2026 CURATOR. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-10 text-[12px] font-bold uppercase tracking-[1px] text-on-surface opacity-80">
        <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        <a href="/contact" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>
    </footer>
  );
}
