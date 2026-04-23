import React, { useState } from "react";
import { User, ShoppingBag, MapPin, LogOut, ChevronRight, Package, Calendar, Settings, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, Link } from "react-router-dom";

type Tab = "profile" | "orders" | "addresses";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const navigate = useNavigate();

  const handleSignout = () => {
    // Mock signout
    navigate("/login");
  };

  const tabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "orders", label: "My Orders", icon: ShoppingBag },
    { id: "addresses", label: "My Addresses", icon: MapPin },
  ];

  return (
    <div className="bg-surface min-h-screen py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-12">
            <div>
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Account</h1>
                <p className="text-xs font-bold opacity-30 uppercase tracking-widest">Enterprise Dashboard</p>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all group ${
                    activeTab === tab.id 
                    ? "bg-primary text-black shadow-lg" 
                    : "text-on-surface opacity-60 hover:bg-white hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-black" : "opacity-40 group-hover:opacity-100"}`} />
                    <span className="text-sm font-black uppercase tracking-[1px]">{tab.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? "translate-x-1" : "opacity-0 group-hover:opacity-40"}`} />
                </button>
              ))}
              
              <button 
                onClick={handleSignout}
                className="w-full flex items-center gap-4 p-5 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-black uppercase tracking-[1px] text-sm"
              >
                <LogOut className="w-5 h-5" />
                Signout
              </button>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {activeTab === "profile" && <ProfileView key="profile" />}
              {activeTab === "orders" && <OrdersView key="orders" />}
              {activeTab === "addresses" && <AddressesView key="addresses" />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white rounded-[3rem] p-12 shadow-sm border border-on-surface/5 space-y-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
         <div className="relative group">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-primary shadow-xl">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
               <Settings className="w-4 h-4" />
            </button>
         </div>
         <div className="text-center md:text-left">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Alex Thompson</h2>
            <p className="text-sm font-bold opacity-30 uppercase tracking-[2px]">Primary Representative • Tech Solutions Ltd</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Full Name</label>
            <div className="w-full h-14 bg-gray-50 rounded-2xl flex items-center px-6 font-bold">Alex Thompson</div>
         </div>
         <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Email Address</label>
            <div className="w-full h-14 bg-gray-50 rounded-2xl flex items-center px-6 font-bold">alex@techsolutions.com</div>
         </div>
         <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Phone Number</label>
            <div className="w-full h-14 bg-gray-50 rounded-2xl flex items-center px-6 font-bold">+44 7700 900000</div>
         </div>
         <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Company VAT</label>
            <div className="w-full h-14 bg-gray-50 rounded-2xl flex items-center px-6 font-bold italic">GB 123 4567 89</div>
         </div>
      </div>
      
      <button className="pill-button-primary px-10 py-4 uppercase tracking-[2px] text-xs h-auto">
         Update Profile
      </button>
    </motion.div>
  );
}

function OrdersView() {
  const orders = [
    { id: "MX-9021", date: "Oct 12, 2026", total: "£4,290.00", status: "In Transit" },
    { id: "MX-8982", date: "Sep 28, 2026", total: "£1,120.00", status: "Delivered" },
    { id: "MX-8541", date: "Aug 15, 2026", total: "£8,450.00", status: "Delivered" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
         <h2 className="text-3xl font-black uppercase tracking-tighter">Order History</h2>
         <span className="text-[10px] bg-black text-white px-3 py-1 rounded-full font-black uppercase tracking-[1px]">{orders.length} Orders</span>
      </div>

      <div className="space-y-4">
        {orders.map(order => (
          <Link key={order.id} to={`/order/${order.id}`} className="block">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-on-surface/5 flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-md transition-shadow">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-on-surface/20 group-hover:bg-primary group-hover:text-black transition-all">
                  <Package className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black">{order.id}</h4>
                  <div className="flex items-center gap-3 mt-1 opacity-40">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{order.date}</span>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right space-y-2">
                 <div className="text-2xl font-black italic">{order.total}</div>
                 <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                   order.status === "In Transit" ? "bg-primary text-black border-primary" : "bg-white text-black/40 border-black/5"
                 }`}>
                   {order.status}
                 </span>
              </div>
              
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all transform group-hover:rotate-45">
                 <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function AddressesView() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState<any>(null);

  const handleEdit = (address: any) => {
    setEditingAddress(address);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setEditingAddress(null);
    setIsEditing(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
         <h2 className="text-3xl font-black uppercase tracking-tighter">Business Addresses</h2>
         <button 
          onClick={handleAddNew}
          className="text-[10px] font-black uppercase tracking-widest border-b-2 border-primary hover:border-black transition-all"
         >
          Add New Address
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AddressCard 
          id="1"
          isDefault
          title="Main Headquarters"
          street="Unit 14B, Enterprise Industrial Estate"
          city="London"
          postcode="E14 4BB"
          country="United Kingdom"
          onEdit={() => handleEdit({id: "1", title: "Main Headquarters", street: "Unit 14B, Enterprise Industrial Estate", city: "London", postcode: "E14 4BB"})}
        />

        <AddressCard 
          id="2"
          title="Satellite Service Center"
          street="42 Innovation Way, Tech Park"
          city="Manchester"
          postcode="M1 1TH"
          country="United Kingdom"
          onEdit={() => handleEdit({id: "2", title: "Satellite Service Center", street: "42 Innovation Way, Tech Park", city: "Manchester", postcode: "M1 1TH"})}
        />
      </div>

      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsEditing(false)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-10">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">
                    {editingAddress ? "Edit Address" : "Add New Address"}
                  </h3>
                  <p className="text-xs font-medium opacity-40 uppercase tracking-widest">Enterprise Logistics Details</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Address Title (e.g. Office)</label>
                    <input 
                      type="text" 
                      defaultValue={editingAddress?.title}
                      className="w-full h-14 bg-gray-50 rounded-2xl px-6 font-bold border-none outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Street Address</label>
                    <input 
                      type="text" 
                      defaultValue={editingAddress?.street}
                      className="w-full h-14 bg-gray-50 rounded-2xl px-6 font-bold border-none outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">City</label>
                    <input 
                      type="text" 
                      defaultValue={editingAddress?.city}
                      className="w-full h-14 bg-gray-50 rounded-2xl px-6 font-bold border-none outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-30 px-6">Postal Code</label>
                    <input 
                      type="text" 
                      defaultValue={editingAddress?.postcode}
                      className="w-full h-14 bg-gray-50 rounded-2xl px-6 font-bold border-none outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                  
                  <div className="md:col-span-2 flex items-center gap-10 pt-4">
                    <button 
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="pill-button-primary px-12 h-14 uppercase tracking-widest text-xs"
                    >
                      Save Address
                    </button>
                    <button 
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                    >
                      Discard Changes
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function AddressCard({ id, title, street, city, postcode, country, isDefault, onEdit }: any) {
  return (
    <div className={`bg-white rounded-[2rem] p-10 shadow-sm border-2 ${isDefault ? 'border-primary' : 'border-on-surface/5 opacity-60 hover:opacity-100 transition-opacity'} space-y-6 relative overflow-hidden`}>
      {isDefault && (
        <div className="absolute top-0 right-0 bg-primary text-black px-4 py-1 text-[9px] font-black uppercase tracking-widest rounded-bl-xl shadow-sm">Default</div>
      )}
      <div className={`w-12 h-12 ${isDefault ? 'bg-black text-primary' : 'bg-gray-50 text-on-surface'} rounded-full flex items-center justify-center`}>
        <MapPin className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-lg font-black uppercase tracking-tight mb-2">{title}</h4>
        <p className="text-sm opacity-50 font-medium leading-relaxed">
          {street}<br />
          {city}, {postcode}<br />
          {country}
        </p>
      </div>
      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <button 
          onClick={onEdit}
          className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100"
        >
          Edit
        </button>
        {!isDefault && (
          <button className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:opacity-80">Remove</button>
        )}
      </div>
    </div>
  );
}
