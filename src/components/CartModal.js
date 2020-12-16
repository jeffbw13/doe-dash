import React from "react";
import Cart from "./Cart";

const CartModal = (props) => {
  return (
    <div
      className="cart-modal"
      style={{
        transition: "transform .5s",
        transform: props.isOpen ? "translateX(0)" : "translateX(20vw)",
      }}
    >
      {props.children}
    </div>
  );
};

export default CartModal;

/*
        opacity: props.isOpen ? 1 : 0,

*/
