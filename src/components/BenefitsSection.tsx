import React from "react";
import { ShieldCheck, Cable, Wrench } from "lucide-react";

const BENEFITS = [
  {
    title: "Lifetime warranty",
    subtitle: "on repair parts",
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    bgColor: "bg-red-50",
    iconBg: "bg-red-100/50"
  },
  {
    title: "Retail ready",
    subtitle: "accessories",
    icon: <Cable className="w-8 h-8 text-green-600" />,
    bgColor: "bg-green-50",
    iconBg: "bg-green-100/50"
  },
  {
    title: "Tools & supplies",
    subtitle: "for your business",
    icon: <Wrench className="w-8 h-8 text-orange-600" />,
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100/50"
  }
];

export default function BenefitsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BENEFITS.map((b, i) => (
          <div 
            key={i} 
            className="group flex items-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-on-surface/5"
          >
            {/* Left Icon Area */}
            <div className={`w-32 h-24 flex items-center justify-center relative`}>
                <div className={`absolute inset-0 ${b.bgColor} opacity-60`} />
                <div className={`absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent to-white`} />
                <div className={`relative z-10 w-16 h-16 ${b.iconBg} rounded-2xl flex items-center justify-center`}>
                    {b.icon}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 px-6 py-4">
              <h3 className="text-lg font-extrabold text-on-surface leading-tight uppercase tracking-tight">
                {b.title}
              </h3>
              <p className="text-xs font-semibold text-on-surface/40 uppercase tracking-widest leading-none mt-1">
                {b.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
