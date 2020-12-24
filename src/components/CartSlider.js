import React from "react";
import Cart from "./Cart";

const CartSlider = (props) => {
  return (
    <div className="cart-slider-bgg" onClick={() => props.onRequestClose()}>
      <div
        className="cart-slider"
        style={{
          transition: "transform .5s",
          transform: props.isOpen ? "translateX(0)" : "translateX(20vw)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default CartSlider;

/*
        opacity: props.isOpen ? 1 : 0,

*/
