import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Header/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Home/Product";
import Products from "./modules/Home/Products";
import CategoryProducts from "./modules/Home/CategoryProducts";
import Cart from "./modules/Home/Cart";
import About from "./components/Header/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
