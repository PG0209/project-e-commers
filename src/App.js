/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import ElectronicProducts from "./Pages/ElectronicProducts";
import JewelleryProducts from "./Pages/JewelleryProducts";
import WomensProducts from "./Pages/WomensProducts";
import MensProducts from "./Pages/MensProducts";
import Sliders from "./Components/Sliders";
import CategoryComponent from "./Pages/CategoryComponent";
import Footer from "./Components/Footer";
import Newsletter from "./Components/NewsLetter";
import PopularProducts from "./Components/popularProducts/PopularProducts";
import ProductListing from "./Pages/ProductListing"
import ProductDetail from "./Pages/ProductDetail";
import CategoryListing from "./Pages/CategoryListing";
import SpecificCategory from "./Pages/SpecificCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <>
          <Header/>
          <Sliders />
          <CategoryListing/>
          <PopularProducts/>
          <Newsletter/>
          <Footer />
        </>}/>
        <Route path="/mensfashion" element={<MensProducts/>}/>
        <Route path="/womensfashion" element={<WomensProducts/>}/>
        <Route path="/electronicitems" element={<ElectronicProducts/>}/>
        <Route path="/jewellery" element={<JewelleryProducts/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route path="/product/category/electronics" element={<SpecificCategory/>}/>
       </Routes>
    </Router>
  );
}

export default App;
