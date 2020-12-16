import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuModal from "react-modal";
import CartModal from "./CartModal";
import Menu from "./Menu";
import Cart from "./Cart";
//import { Transition } from "react-transition-group";
//import Fade from "./Fade";
//import ExampleTransition from "./ExampleTransition";
import menu from "../assets/icons/menu.svg";
import cart from "../assets/icons/shopping-cart2.svg";
import doe from "../assets/images/doe2.png";

//  menu:               onClick={() => setOpenPanel(true)}
//  menu and cart need to be modals
//  transition timing is not working - need starting gun?
const menuStyles = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  content: {
    top: 0,
    left: "-20%",
    width: "20%",
    border: "none",
    padding: "none",
    borderRadius: "none",
    boxShadow: "0px 0px 3px 3px gray",
  },
};

//MenuModal.setAppElement("#menu");
//CartModal.setAppElement("#cart");

const SearchBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const addr = "1301 14th Ave";

  return (
    <>
      <div className="search-bar">
        <div className="mdpa">
          <a href="#">
            <img
              className="menu-icon"
              src={menu}
              onClick={() => setMenuOpen(!menuOpen)}
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
        <Link to="/">
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
        </Link>
        <div className="search-cart">
          <input
            type="text"
            className="search-box"
            id="search"
            name="search"
            placeholder="Search"
          ></input>
          <div className="cart-button" onClick={() => setCartOpen(!cartOpen)}>
            <img src={cart} />0
          </div>
        </div>
      </div>
      <div class="menu-wrapper">
        <MenuModal
          isOpen={menuOpen}
          onRequestClose={() => setMenuOpen(!menuOpen)}
          style={menuStyles}
        >
          <Menu setMenuOpen={setMenuOpen} />
        </MenuModal>
      </div>
      <CartModal
        isOpen={cartOpen}
        onRequestClose={() => setCartOpen(!cartOpen)}
      >
        <Cart setCartOpen={setCartOpen} />
      </CartModal>
    </>
  );
};

export default SearchBar;

/*

<SlidingPanel type={"left"} isOpen={openMenu} size={20}>
<div>
  <Menu setOpenMenu={setOpenMenu} />
</div>
</SlidingPanel>

*/

/*
animation: "slideRight 3s forwards",
    "@keyframes slideRight": {
      to: { left: 0 },
    },
*/
