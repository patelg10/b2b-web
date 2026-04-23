import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export default function BlogAndNewsletter() {
  return (
    <div className="space-y-32 py-32 overflow-hidden">
      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl font-extrabold tracking-tighter leading-none">
              THE <span className="relative">RESTORED<span className="absolute bottom-1 left-0 w-full h-[30%] bg-primary -z-10 opacity-30"></span></span> <br /> JOURNAL
            </h2>
            <p className="text-on-surface/60 max-w-sm leading-relaxed">
              Insights into the circular economy, repair guides, and the latest in sustainable tech.
            </p>
            <button className="pill-button-outline">
              Read Our Stories
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Art of Precision Refurbishing",
                category: "Sustainability",
                image: "https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Why Certified Parts Matter for Longevity",
                category: "Tech Guide",
                image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=600&auto=format&fit=crop"
              }
            ].map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2 block border-l-2 border-primary pl-2">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold group-hover:underline transition-all pr-8">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-surface-container-low py-32 rounded-[4rem] mx-6">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="inline-flex p-4 bg-primary rounded-full mb-4 shadow-lg shadow-primary/20">
            <Mail className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-none">
            JOIN THE <span className="relative inline-block">
              TECH
              <span className="absolute bottom-2 left-0 w-full h-[25%] bg-primary -z-10"></span>
            </span> CIRCLE.
          </h2>
          <p className="text-xl text-on-surface/50 max-w-2xl mx-auto">
            Get exclusive early access to premium inventory arrivals and sustainability insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 bg-white rounded-full px-8 py-4 text-sm focus:ring-2 focus:ring-primary outline-none border-none shadow-sm"
            />
            <button className="pill-button-primary px-8 py-4 flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-[10px] uppercase tracking-widest text-on-surface/30 font-bold">
            No spam. Only high-end tech arrivals.
          </p>
        </div>
      </section>
    </div>
  );
}
