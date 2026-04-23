/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import MerchandiseSection from "./components/MerchandiseSection";
import BlogAndNewsletter from "./components/BlogAndNewsletter";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
import PromoSlider from "./components/PromoSlider";

function HomePage() {
  return (
    <>
      <PromoSlider />
      <Hero />
      <MerchandiseSection 
        title="BEST SELLERS" 
        subtitle="The most sought-after devices, certified and restored to their former glory." 
      />
      <section className="bg-surface-container-low py-12">
        <MerchandiseSection 
          title="PRECISION PARTS" 
          subtitle="Certified original replacement parts for retailers and master technicians." 
        />
      </section>
      <BlogAndNewsletter />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
