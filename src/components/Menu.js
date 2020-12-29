import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import closex from "../assets/icons/closex.svg";
import home from "../assets/icons/home.svg";
import pickup from "../assets/icons/pickup.svg";
import offers from "../assets/icons/offers.svg";
import help from "../assets/icons/help.svg";
import signup from "../assets/icons/signup.svg";

//  problem:  when you click on a page & you're already on it, it doesn't do anything
const Menu = (props) => {
  const setMenuOpen = props.setMenuOpen;
  console.log("props:", props);
  return (
    <div className="menu">
      <div className="menu-close">
        <img
          src={closex}
          onClick={() => setMenuOpen(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="menu-upper">
        <div className="menu-item">
          <NavLink
            to={{
              pathname: "/",
              search: "?sort=name",
              state: {
                display: "featuredStores",
                store: {},
                category: {},
              },
            }}
            activeStyle={{
              color: "#f9300a",

              fill: "currentColor",
            }}
          >
            <img src={home} />
            Home
          </NavLink>
        </div>
        <hr />
        <div className="menu-item">
          <NavLink
            to="/pickup"
            activeStyle={{
              color: "#f9300a",
              fill: "currentColor",
            }}
          >
            <img src={pickup} />
            Pickup
          </NavLink>
        </div>
        <hr />
        <NavLink
          to="/offers"
          activeStyle={{
            color: "#f9300a",
            fill: "currentColor",
          }}
        >
          <img src={offers} />
          Offers
        </NavLink>
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

export default withRouter(Menu);
