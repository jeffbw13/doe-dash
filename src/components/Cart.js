import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

const Cart = ({ setCartOpen, cartContents, setCartContents }) => {
  console.log("cartcontents: ", cartContents);
  return (
    <div className="cart">
      <h4>Cart Bubba</h4>
      <div className="cart-contents">
        {cartContents.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
