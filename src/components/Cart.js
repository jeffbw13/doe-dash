// import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import empty from "../assets/icons/empty-cart.svg";

const Cart = ({ order, setOrder }) => {
  //  removed setCartOpen from props
  console.log("order in Cart: ", order);
  return (
    <div className="cart">
      {order.store && (
        <>
          <p style={{ fontWeight: "700" }}>Your Order</p>
          <p style={{ fontWeight: "700", color: "#f9300a" }}>
            {order.store.name}
          </p>
          <div className="cart-contents">
            {order.cartContents.map((item, index) => {
              return <CartItem item={item} key={index} />;
            })}
          </div>
        </>
      )}
      {!order.store && (
        <>
          <h1>Empty Cart</h1>
        </>
      )}
    </div>
  );
};

export default Cart;
