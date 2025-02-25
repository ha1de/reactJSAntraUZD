import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Krepšelis</h2>
      {cart.length === 0 ? (
        <p>Krepšelis tuščias</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Pašalinti</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
