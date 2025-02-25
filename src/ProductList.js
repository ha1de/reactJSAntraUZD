import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Prekės</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}
