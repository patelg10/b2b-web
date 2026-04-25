import { 
  Instagram, Twitter, Facebook, Youtube, Linkedin, 
  MapPin, MessageSquare, Phone, Mail, HelpCircle, 
  ChevronDown, ExternalLink 
} from "lucide-react";

const FOOTER_LINKS = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Quality Standards", href: "/quality" },
    { label: "Return Policy", href: "/returns" },
    { label: "Trademark Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Payment Methods", href: "/payments" },
    { label: "Terms And Conditions", href: "/terms" }
  ],
  services: [
    { label: "Account", href: "/login" },
    { label: "LCD Buyback", href: "/buyback" },
    { label: "Pre-Owned Devices", href: "/pre-owned" },
    { label: "Shipping", href: "/shipping" },
    { label: "Marketing Material", href: "/marketing" },
    { label: "API Consumers", href: "/api" }
  ],
  brands: [
    { label: "XO7 2.0 Technology", href: "/xo7" },
    { label: "AQ7 Technology", href: "/aq7" },
    { label: "AmpSentrix", href: "/ampsentrix" },
    { label: "Casper", href: "/casper" },
    { label: "DisplayBase", href: "/displaybase" },
    { label: "ScrewBox 2.0", href: "/screwbox" },
    { label: "TapeBase", href: "/tapebase" }
  ]
};

const PARTNERS = [
  { name: "Apple", role: "Genuine Parts Distributor", color: "text-black" },
  { name: "Google", role: "Authorized Distributor", color: "text-[#4285F4]" },
  { name: "OnePlus", role: "Authorized Distributor", color: "text-[#EB0029]" },
  { name: "Motorola", role: "Authorized Distributor", color: "text-[#5e2d91]" },
  { name: "LG", role: "Authorized Distributor", color: "text-[#A50034]" }
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Logo & Region */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex flex-col gap-1">
                <span className="font-display text-2xl font-black tracking-[-1px]">mobile<span className="text-primary italic">S</span>entrix</span>
                <span className="text-[10px] font-black tracking-widest opacity-40 uppercase">United Kingdom</span>
            </div>

            <div className="space-y-3">
                <div className="relative group">
                    <button className="w-full bg-[#222] border border-white/5 rounded-lg px-4 py-2.5 flex items-center justify-between text-xs font-bold transition-all hover:bg-[#2a2a2a]">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🇬🇧</span>
                            <span>United Kingdom</span>
                        </div>
                        <ChevronDown className="w-4 h-4 opacity-40" />
                    </button>
                    {/* Placeholder dropdown */}
                </div>
                <div className="flex gap-2">
                    <button className="flex-1 bg-[#222] border border-white/5 rounded-lg px-4 py-2.5 flex items-center justify-between text-xs font-bold transition-all hover:bg-[#2a2a2a]">
                        <span>English</span>
                        <ChevronDown className="w-4 h-4 opacity-40" />
                    </button>
                    <button className="flex-1 bg-[#222] border border-white/5 rounded-lg px-4 py-2.5 flex items-center justify-between text-xs font-bold transition-all hover:bg-[#2a2a2a]">
                        <span>GBP</span>
                        <ChevronDown className="w-4 h-4 opacity-40" />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {["FedEx", "Royal Mail", "UPS", "DPD"].map(p => (
                  <div key={p} className="bg-white text-black px-3 py-1.5 rounded-md text-[9px] font-black uppercase tracking-tighter shadow-sm flex items-center min-w-[60px] justify-center">
                    {p}
                  </div>
                ))}
            </div>
          </div>

          {/* Links: About */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 pb-2 border-b border-white/5">About</h4>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.about.map(link => (
                <a key={link.label} href={link.href} className="text-[13px] font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Links: Services */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 pb-2 border-b border-white/5">Services</h4>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map(link => (
                <a key={link.label} href={link.href} className="text-[13px] font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Links: Our Brands */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 pb-2 border-b border-white/5">Our Brands</h4>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.brands.map(link => (
                <a key={link.label} href={link.href} className="text-[13px] font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Links: Support */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-40 pb-2 border-b border-white/5">Support</h4>
            <nav className="flex flex-col gap-4">
              <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 text-[13px] font-bold opacity-60 group-hover:opacity-100">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Location</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
              </a>
              <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 text-[13px] font-bold opacity-60 group-hover:opacity-100">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span>Live Chat</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
              </a>
              <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 text-[13px] font-bold opacity-60 group-hover:opacity-100">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>Phone</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
              </a>
              <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 text-[13px] font-bold opacity-60 group-hover:opacity-100 group-hover:text-[#25D366]">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
              </a>
              <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 text-[13px] font-bold opacity-60 group-hover:opacity-100">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>Email</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
              </a>
              <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 text-[13px] font-bold opacity-60 group-hover:opacity-100">
                    <HelpCircle className="w-4 h-4 text-primary" />
                    <span>FAQs</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40" />
              </a>
            </nav>
          </div>

          {/* Partners Badges */}
          <div className="space-y-4">
             {PARTNERS.map(p => (
                <div key={p.name} className="bg-white rounded-xl p-3 flex items-center justify-between shadow-lg ring-1 ring-white/10 group cursor-pointer hover:scale-[1.02] transition-transform">
                    <span className={`text-sm font-black uppercase tracking-tight ${p.color}`}>{p.name}</span>
                    <span className="text-[9px] font-bold uppercase text-black opacity-40">{p.role}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
           {/* Payment Methods */}
           <div className="flex flex-wrap items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
             <span className="text-xl font-black tracking-tighter">VISA</span>
             <span className="text-xl font-black tracking-tighter">Mastercard</span>
             <span className="text-xl font-black tracking-tighter italic">PayPal</span>
             <span className="text-xl font-black tracking-tighter">AMEX</span>
             <span className="text-xl font-black tracking-tighter">DISCOVER</span>
           </div>

           {/* Socials */}
           <div className="flex items-center gap-6">
             <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
             <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
             <a href="#" className="hover:text-green-500 transition-colors"><Phone className="w-5 h-5 rotate-90" /></a> {/* WhatsApp icon approximation */}
             <a href="#" className="hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
             <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
             <a href="#" className="hover:text-white transition-colors bg-white/10 p-1.5 rounded-lg"><XIcon /></a>
           </div>
        </div>

        {/* Legal */}
        <div className="mt-12 space-y-4 pt-10 border-t border-white/5">
            <p className="text-[11px] font-bold opacity-40">
                &copy; 2026 MobileSentrix LTD
            </p>
            <p className="text-[11px] font-medium opacity-30">
                Company Number: 15402496 | VAT Number: GB480921386
            </p>
            <p className="text-[10px] font-medium opacity-20 max-w-4xl text-justify">
                All trademarks are properties of their respective holders. MobileSentrix does not own or make claim to those trademarks used on this website in which it is not the holder.
            </p>
        </div>
      </div>
    </footer>
  );
}

function XIcon() {
    return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
        </svg>
    );
}
