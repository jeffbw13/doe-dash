import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import star from "../assets/icons/star.svg";

//  Products here is the menu

const Store = ({ store, order, setOrder }) => {
  const orderItem = (item) => {
    //  if different store, delete the old order
    if (order.store && order.store.storeId !== store.storeId) {
      setOrder({ cartContents: [] });
    }
    const orderX = { ...order };
    if (!orderX.store) {
      orderX.store = {
        _id: store._id,
        storeId: store.storeId,
        name: store.name,
      };
    }
    orderX.cartContents.push({ ...item });
    setOrder(orderX);
  };

  let dollars = "";
  for (let x = 1; x <= store.cost; x++) {
    dollars += "$";
  }

  return (
    <div className="store">
      <h4>Store</h4>
      <img src={store.photo} />
      <div className="store-info">
        <h1>{store.name}</h1>
        {store.description.substring(0, 40)}... • {store.stars}
        <img
          style={{ width: "15px", height: "15px", fill: "#191919" }}
          src={star}
        />
        ({store.ratings} ratings) • {store.distance} mi • {dollars}
        <h2>Menu</h2>
      </div>
      <Products store={store} orderItem={orderItem} />
      <div className="store-cart">
        <Cart order={order} setOrder={setOrder} />
      </div>
    </div>
  );
};

export default Store;

// <Products store={store} />
