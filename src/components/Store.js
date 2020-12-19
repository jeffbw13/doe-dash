import React from "react";
import Products from "./Products";

const Store = ({ store }) => {
  return (
    <div className="store">
      <h4>Store</h4>
      <img src={store.photo} />
      <h1>{store.name}</h1>
      <Products store={store} />
    </div>
  );
};

export default Store;

// <Products store={store} />
