import React from "react";

const CartItem = ({ item }) => {
  return (
    <>
      <h4>Gotta item</h4>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </>
  );
};

export default CartItem;
