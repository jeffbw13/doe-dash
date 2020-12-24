import React from "react";
import Menu from "./Menu";

const MenuSlider = (props) => {
  return (
    <div className="menu-slider-bgg" onClick={() => props.onRequestClose()}>
      <div
        className="menu-slider"
        style={{
          transition: "transform .5s",
          transform: props.isOpen ? "translateX(0)" : "translateX(-20vw)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default MenuSlider;
