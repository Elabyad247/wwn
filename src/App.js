import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import HotSales from "./components/HotSales";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Features />
              <HotSales />
            </>
          }
        />
        <Route path="products" element={<ProductCatalog />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="product/:productID" element={<ProductDetails />} />;
      </Routes>
    </div>
  );
}

export default App;
