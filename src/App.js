import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "iPhone 15", price: 1200 },
    { id: 2, name: "MacBook Pro", price: 2500 },
    { id: 3, name: "AirPods Pro", price: 250 },
    { id: 4, name: "Apple Watch", price: 400 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1>Pirkinių krepšelis</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
