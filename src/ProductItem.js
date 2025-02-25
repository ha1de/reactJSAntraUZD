import React from "react";

export default function ProductItem({ product, addToCart }) {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
    </li>
  );
}
