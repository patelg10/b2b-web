import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BrandNav from "./BrandNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BrandNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
