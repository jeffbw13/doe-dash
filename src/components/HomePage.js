import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import Show5Stores from "./Show5Stores";
import Store from "./Store";
import Category from "./Category";

//  need to shuffle these each time
//  also, rename this featuredStores and import it
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
  const [category, setCategory] = useState({});

  return (
    <>
      <SearchBar />
      {display === "featuredStores" && (
        <CategoryBar setDisplay={setDisplay} setCategory={setCategory} />
      )}
      {display === "featuredStores" &&
        whatToShow.map((showing) => {
          return (
            <Show5Stores
              showing={showing}
              setDisplay={setDisplay}
              setStore={setStore}
              key={showing}
            />
          );
        })}
      {display === "store" && <Store store={store} />}
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
