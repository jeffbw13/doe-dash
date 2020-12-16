import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import closex from "../assets/icons/closex.svg";
import home from "../assets/icons/home.svg";
import pickup from "../assets/icons/pickup.svg";
import offers from "../assets/icons/offers.svg";
import help from "../assets/icons/help.svg";
import signup from "../assets/icons/signup.svg";

const Menu = ({ setOpenMenu }) => {
  return (
    <div className="menu">
      <div className="menu-close">
        <img
          src={closex}
          onClick={() => setOpenMenu(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="menu-upper">
        <div>
          <Link to="/">
            <img src={home} />
            Home
          </Link>
        </div>
        <hr />
        <Link to="/pickup">
          <img src={pickup} />
          Pickup
        </Link>
        <hr />
        <Link to="/offers">
          <img src={offers} />
          Offers
        </Link>
        <hr />
        <a href="#">
          <img src={help} />
          Help
        </a>
        <hr />
        <a href="#">
          <img src={signup} />
          Sign Up or Sign In
        </a>
        <hr />
      </div>
    </div>
  );
};

export default Menu;
