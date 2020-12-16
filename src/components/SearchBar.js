import React, { useState } from "react";
import SlidingPanel from "react-sliding-side-panel";
import Menu from "./Menu";
import Cart from "./Cart";
//import { Transition } from "react-transition-group";
//import Fade from "./Fade";
//import ExampleTransition from "./ExampleTransition";
import menu from "../assets/icons/menu.svg";
import cart from "../assets/icons/shopping-cart2.svg";
import doe from "../assets/images/doe2.png";

//  menu:               onClick={() => setOpenPanel(true)}

const SearchBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const addr = "1301 14th Ave";
  return (
    <>
      <div className="search-bar">
        <div className="mdpa">
          <a href="#">
            <img
              className="menu-icon"
              src={menu}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </a>
          <a href="#">Delivery</a>
          <a href="#">Pickup</a>
          <div
            style={{ width: 0, height: 20, border: "1px solid lightgray" }}
          ></div>
          <p>
            <span style={{ color: "#f9300a" }}> ASAP</span> to{" "}
            <span style={{ color: "#f9300a" }}>{addr}</span>
          </p>
        </div>
        <div className="logo-box">
          <div className="doe-hed">
            <img
              src={doe}
              style={{
                width: "24px",
                height: "24px",
                filter:
                  "invert(23%) sepia(88%) saturate(3360%) hue-rotate(357deg) brightness(99%) contrast(98%)",
              }}
            />
          </div>
          <p>&nbsp; D O E &nbsp; D A S H</p>
        </div>
        <div className="search-cart">
          <input
            type="text"
            className="search-box"
            id="search"
            name="search"
            placeholder="Search"
          ></input>
          <div className="cart-button">
            <img src={cart} />0
          </div>
        </div>
      </div>
      <SlidingPanel type={"left"} isOpen={openMenu} size={20}>
        <div>
          <Menu setOpenMenu={setOpenMenu} />
        </div>
      </SlidingPanel>
      <SlidingPanel type={"right"} isOpen={openCart} size={30}>
        <div>
          <Cart setOpenCart={setOpenCart} />
        </div>
      </SlidingPanel>
    </>
  );
};

export default SearchBar;
