import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Package, Truck, Calendar, MapPin, CreditCard, Download, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function OrderDetailsPage() {
  const { id } = useParams();
  
  // Mock order data
  const order = {
    id: id || "MX-9021",
    date: "October 12, 2026",
    status: "In Transit",
    trackingNumber: "TRK-294019284",
    shippingMethod: "Next Day Priority (B2B)",
    paymentMethod: "Trade Account (30-Day Terms)",
    shippingAddress: {
      name: "Alex Thompson",
      company: "Tech Solutions Ltd",
      street: "Unit 14B, Enterprise Industrial Estate",
      city: "London",
      postcode: "E14 4BB",
      country: "United Kingdom"
    },
    items: [
      { 
        id: "1", 
        name: "OLED Assembly For iPhone 16e (Genuine OEM)", 
        price: "£183.12", 
        quantity: 2, 
        image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=80&w=600"
      },
      { 
        id: "2", 
        name: "Replacement Battery For iPhone 16e (Genuine OEM)", 
        price: "£38.81", 
        quantity: 5, 
        image: "https://images.unsplash.com/photo-1610411300760-4966779d7249?q=80&w=600"
      }
    ],
    subtotal: "£560.29",
    tax: "£112.06",
    total: "£672.35"
  };

  return (
    <div className="bg-surface min-h-screen py-20 px-10">
      <div className="max-w-5xl mx-auto space-y-12">
        <Link to="/account" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] opacity-40 hover:opacity-100 transition-all">
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-2">
              <div className="flex items-center gap-4">
                 <h1 className="text-5xl font-black uppercase tracking-tighter">Order <span className="text-primary italic">{order.id}</span></h1>
                 <span className="bg-primary text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">{order.status}</span>
              </div>
              <p className="text-sm font-medium opacity-40">Placed on {order.date}</p>
           </div>
           <button className="pill-button-primary h-14 px-8 flex items-center gap-3 uppercase tracking-widest text-[10px]">
              <Download className="w-4 h-4" />
              Download VAT Invoice
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Items List */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-on-surface/5 space-y-8">
               <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <Package className="w-5 h-5 text-primary" />
                  Shipment Items
               </h3>
               <div className="space-y-6">
                 {order.items.map((item) => (
                   <div key={item.id} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden p-2 flex-shrink-0">
                         <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 space-y-1">
                         <h4 className="text-sm font-bold tracking-tight">{item.name}</h4>
                         <p className="text-xs opacity-40">Qty: <span className="font-black text-on-surface">{item.quantity}</span></p>
                      </div>
                      <div className="text-right">
                         <p className="font-black">{item.price}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Tracking & Logistics */}
            <div className="bg-black text-white rounded-[3rem] p-10 shadow-2xl space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  Delivery Tracking
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Tracking Number</span>
                     <p className="text-lg font-black text-primary italic">{order.trackingNumber}</p>
                  </div>
                  <div className="space-y-1">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Shipping Method</span>
                     <p className="text-lg font-bold">{order.shippingMethod}</p>
                  </div>
               </div>
               
               {/* Timeline Mock */}
               <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                     <p className="text-xs font-bold">Shipped from London Depot <span className="opacity-40 font-medium ml-2">Oct 13, 09:12 AM</span></p>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-primary opacity-30" />
                     <p className="text-xs font-medium opacity-40">Order Processed <span className="ml-2 italic">Oct 12, 16:45 PM</span></p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-8">
            {/* Financials */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-on-surface/5 space-y-6">
               <h3 className="text-xl font-black uppercase tracking-tighter">Summary</h3>
               <div className="space-y-3">
                  <div className="flex justify-between text-xs font-medium opacity-60">
                     <span>Subtotal</span>
                     <span>{order.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium opacity-60">
                     <span>Tax (VAT 20%)</span>
                     <span>{order.tax}</span>
                  </div>
                  <div className="h-px bg-gray-100 my-4" />
                  <div className="flex justify-between items-end">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Total Amount</span>
                     <span className="text-3xl font-black text-on-surface">£672.35</span>
                  </div>
               </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-on-surface/5 space-y-8">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
                     <MapPin className="w-3 h-3" />
                     Shipping Address
                  </h4>
                  <div className="text-sm font-medium leading-relaxed">
                     <p className="font-bold">{order.shippingAddress.name}</p>
                     <p>{order.shippingAddress.company}</p>
                     <p className="opacity-60">{order.shippingAddress.street}</p>
                     <p className="opacity-60">{order.shippingAddress.city}, {order.shippingAddress.postcode}</p>
                     <p className="opacity-60">{order.shippingAddress.country}</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
                     <CreditCard className="w-3 h-3" />
                     Payment Detail
                  </h4>
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-green-600" />
                     <p className="text-xs font-bold leading-tight">{order.paymentMethod}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
