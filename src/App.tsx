/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MerchandiseSection from "./components/MerchandiseSection";
import BlogAndNewsletter from "./components/BlogAndNewsletter";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import AccountPage from "./pages/Account";
import OrderDetailsPage from "./pages/OrderDetails";
import OrderSuccessPage, { OrderErrorPage } from "./pages/Status";
import PromoSlider from "./components/PromoSlider";
import MainCategorySlider from "./components/MainCategorySlider";
import { CartProvider } from "./context/CartContext";

function HomePage() {
  return (
    <>
      <PromoSlider />
      <MainCategorySlider />
      <MerchandiseSection 
        title="BEST SELLERS" 
        subtitle="The most sought-after devices, certified and restored to their former glory." 
      />
      <section className="bg-black py-12">
        <MerchandiseSection 
          title="PRECISION PARTS" 
          subtitle="Certified original replacement parts for retailers and master technicians." 
          isDark
        />
      </section>
      <BlogAndNewsletter />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/order/:id" element={<OrderDetailsPage />} />
            <Route path="/success" element={<OrderSuccessPage />} />
            <Route path="/error" element={<OrderErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
