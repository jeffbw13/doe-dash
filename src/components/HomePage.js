import React, { useState } from "react";
import featuredStores from "../data/featuredStores";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import Show5Stores from "./Show5Stores";
import Pickup from "./Pickup";
import Store from "./Store";
import Category from "./Category";

//  need to shuffle featuredStores each time

const HomePage = ({
  address,
  setAddress,
  shortAddress,
  geoCode,
  setGeoCode,
}) => {
  const [delivery, setDelivery] = useState(false);
  const [display, setDisplay] = useState("featuredStores");
  const [store, setStore] = useState({});
  const [category, setCategory] = useState({});
  const [cartContents, setCartContents] = useState([]);

  const userLoc = geoCode;
  console.log("address", address);

  return (
    <>
      <SearchBar
        cartContents={cartContents}
        setCartContents={setCartContents}
        delivery={delivery}
        setDelivery={setDelivery}
        address={shortAddress}
      />
      {delivery && display === "featuredStores" && (
        <CategoryBar setDisplay={setDisplay} setCategory={setCategory} />
      )}
      {delivery &&
        display === "featuredStores" &&
        featuredStores.map((showing) => {
          return (
            <Show5Stores
              showing={showing}
              setDisplay={setDisplay}
              setStore={setStore}
              key={showing}
            />
          );
        })}
      {!delivery && display !== "store" && (
        <Pickup setDisplay={setDisplay} setStore={setStore} userLoc={userLoc} />
      )}
      {display === "store" && (
        <Store
          store={store}
          cartContents={cartContents}
          setCartContents={setCartContents}
        />
      )}
      {display === "category" && (
        <Category
          category={category}
          setDisplay={setDisplay}
          setStore={setStore}
          setCategory={setCategory}
        />
      )}
    </>
  );
};

export default HomePage;
