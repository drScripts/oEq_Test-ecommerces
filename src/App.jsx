import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailNews from "./pages/DetailNews";
import AllNews from "./pages/AllNews";
import ProductByCategories from "./pages/ProductByCategories";
import DetailProduct from "./pages/DetailProduct";
import SellersInfo from "./pages/SellersInfo";
import ProductRating from "./pages/ProductRating";

function App() {
  console.log(process.env);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news/:id" element={<DetailNews />} />
      <Route path="/news" element={<AllNews />} />
      <Route path="/product/category/:id" element={<ProductByCategories />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      <Route path="/sellers/:id" element={<SellersInfo />} />
      <Route path="/products/:id/rating" element={<ProductRating />} />
    </Routes>
  );
}

export default App;
