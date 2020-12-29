import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
//  Products here is the menu

const Store = ({ store, cartContents, setCartContents }) => {
  const purchaseItem = (item) => {
    alert("purchased item");
    const cartContentsX = cartContents;
    cartContentsX.push(item);
    setCartContents(cartContentsX);
  };

  return (
    <div className="store">
      <h4>Store</h4>
      <img src={store.photo} />
      <h1>{store.name}</h1>
      <Products store={store} purchaseItem={purchaseItem} />
      <Cart cartContents={cartContents} setCartContents={setCartContents} />
    </div>
  );
};

export default Store;

// <Products store={store} />
