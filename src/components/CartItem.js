//import React from "react";

const CartItem = ({ item }) => {
  const addOnsText = [];
  for (const key in item.addOnsOrdered) {
    for (const k in item.addOnsOrdered[key]) {
      if (item.addOnsOrdered[key][k]) {
        addOnsText.push(k);
      }
    }
  }
  return (
    <>
      <div className="cart-item">
        <div>
          <p>
            {item.quantity} x {item.name}
          </p>
        </div>
        <p>${item.totalCost * item.quantity}</p>
      </div>
      {addOnsText.join(", ")}
      <br />
      Delete Item
    </>
  );
};

export default CartItem;
