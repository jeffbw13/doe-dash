import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Show5Stores from "./Show5Stores";
import Store from "./Store";

const whatToShow = [
  {
    title: "Black-Owned Businesses",
    description: "",
    searchFor: {},
  },
  {
    title: "National Favorites",
    description: "",
    searchFor: {},
  },
  {
    title: "Fastest Near You",
    description: "",
    searchFor: {},
  },
  {
    title: "Convenience & Grocery",
    description: "",
    searchFor: {},
  },
];

const HomePage = () => {
  const [display, setDisplay] = useState("featuredStores");
  const [store, setStore] = useState({});
  return (
    <>
      <SearchBar />
      {display === "featuredStores" &&
        whatToShow.map((showing) => {
          return (
            <Show5Stores
              showing={showing}
              setDisplay={setDisplay}
              setStore={setStore}
            />
          );
        })}
      {display === "store" && <Store store={store} />}
    </>
  );
};

export default HomePage;
