import React from "react";
import Products from "./Products";
import Cart from "./Cart";
//  Products here is the menu

const Store = ({ store }) => {
  return (
    <div className="store">
      <h4>Store</h4>
      <img src={store.photo} />
      <h1>{store.name}</h1>
      <Products store={store} />
      <Cart />
    </div>
  );
};

export default Store;

// <Products store={store} />
