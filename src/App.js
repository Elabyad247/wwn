import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import HotSales from "./components/HotSales";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const apiUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id) !== undefined) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const changeQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };
  return (
    <div className="App">
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Features />
              <HotSales products={products} />
            </>
          }
        />
        <Route
          path="/products"
          element={<ProductCatalog products={products} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />{" "}
        ;
      </Routes>
    </div>
  );
}

export default App;
