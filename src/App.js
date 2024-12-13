import Navbar from "./navbar/Navbar";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProducts from "./AddProducts";
import LatestArrivals from "./LatestArrivals";
import ProductDetails from "./product-details/ProductDetails";
import ProductGrid from "./product-grid/ProductGrid";
import ProductUploader from "./AddProducts";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB]">
      <Router>
            <Navbar />
            <Routes>
                {/* Define your routes here */}
                <Route path="/add-product" element={<ProductUploader products={products} setProducts={setProducts}/>} />
                <Route path="/latest-arrivals" element={<ProductGrid products={products}/>} />
                <Route path="/product-details/:id" element={<ProductDetails products={products}/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
