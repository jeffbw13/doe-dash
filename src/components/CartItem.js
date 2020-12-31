import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div>
        <p>
          {item.quantity} x {item.name}
        </p>
      </div>
      <p>${item.totalCost * item.quantity}</p>
    </div>
  );
};

export default CartItem;
