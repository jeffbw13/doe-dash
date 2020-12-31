import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuSlider from "./MenuSlider";
import CartSlider from "./CartSlider";
import Menu from "./Menu";
import Cart from "./Cart";
//import { Transition } from "react-transition-group";
//import ExampleTransition from "./ExampleTransition";
import menu from "../assets/icons/menu.svg";
import cart from "../assets/icons/shopping-cart2.svg";
import doe from "../assets/images/doe2.png";

const SearchBar = ({
  order,
  setOrder,
  delivery,
  setDelivery,
  address,
  setDisplay,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div className="search-bar">
        <div className="mdpa">
          <a href="#">
            <img
              className="menu-icon"
              src={menu}
              onClick={() => setMenuOpen(!menuOpen)}
              alt="menu button"
            />
          </a>
          <a
            href="#"
            style={{
              fontWeight: delivery ? "777" : "444",
            }}
            onClick={() => setDelivery(true)}
          >
            Delivery
          </a>
          <a
            href="#"
            style={{
              fontWeight: delivery ? "444" : "777",
            }}
            onClick={() => setDelivery(false)}
          >
            Pickup
          </a>
          <div
            style={{ width: 0, height: 20, border: "1px solid lightgray" }}
          ></div>
          <p>
            <span style={{ color: "#f9300a" }}> ASAP</span> to{" "}
            <span style={{ color: "#f9300a" }}>{address}</span>
          </p>
        </div>
        <Link to="/">
          <div
            className="logo-box"
            onClick={() => setDisplay("featuredStores")}
          >
            <div className="doe-hed">
              <img
                src={doe}
                style={{
                  width: "24px",
                  height: "24px",
                  filter:
                    "invert(23%) sepia(88%) saturate(3360%) hue-rotate(357deg) brightness(99%) contrast(98%)",
                }}
                alt="doe image"
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
            <img src={cart} alt="cart button" />
            {order.cartContents.length}
          </div>
        </div>
      </div>
      <MenuSlider
        isOpen={menuOpen}
        onRequestClose={() => setMenuOpen(!menuOpen)}
      >
        <Menu setMenuOpen={setMenuOpen} />
      </MenuSlider>
      <CartSlider
        isOpen={cartOpen}
        onRequestClose={() => setCartOpen(!cartOpen)}
      >
        <Cart setCartOpen={setCartOpen} order={order} setOrder={setOrder} />
      </CartSlider>
    </>
  );
};

export default SearchBar;

/*

current cart
<Cart
          setCartOpen={setCartOpen}
          cartContents={cartContents}
          setCartContents={setCartContents}
        />


<SlidingPanel type={"left"} isOpen={openMenu} size={20}>
<div>
  <Menu setOpenMenu={setOpenMenu} />
</div>
</SlidingPanel>

<CartSlider
        isOpen={cartOpen}
        onRequestClose={() => setCartOpen(!cartOpen)}
      >
        <Cart
          setCartOpen={setCartOpen}
          order={order}
          setOrder={setOrder}
        />
      </CartSlider>
*/

/*
animation: "slideRight 3s forwards",
    "@keyframes slideRight": {
      to: { left: 0 },
    },
*/

/*
      <div className="menu-wrapper">
        <MenuModal
          isOpen={menuOpen}
          onRequestClose={() => setMenuOpen(!menuOpen)}
          style={menuStyles}
        >
          <Menu setMenuOpen={setMenuOpen} />
        </MenuModal>
      </div>
*/
