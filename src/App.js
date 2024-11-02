import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopAll from "./Shopall";
import LatestArrivals from "./LatestArrivals";
import ProductDetails from "./product-details/ProductDetails";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB]">
      <Router>
        <div>
            {/* <Navbar /> */}
            <ProductDetails />
            <Routes>
                {/* Define your routes here */}
                <Route path="/shop-all" element={<ShopAll/>} />
                <Route path="/latest-arrivals" element={<LatestArrivals />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
