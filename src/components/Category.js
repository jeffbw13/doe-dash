//  subpage to display stores with selected cqtegory
import React, { useState, useEffect } from "react";
import Store2Prods from "./Store2Prods";
import getStores from "../library/getStores";
import categories from "../data/categories";
import CategoryBox from "./CategoryBox";

//  left half displays category selected and select category buttonws
//  right half displays stores with the selected category
const Category = ({ category, setDisplay, setStore, setCategory }) => {
  const [stores, setStores] = useState([]);
  //  we'll need to get some stores that have the desired category
  useEffect(() => {
    //  this needs to be promise based - get rid of callback
    getStores(
      (data) => {
        console.log("data: ", data);
        setStores(data);
      },
      { categories: `=${category.id}` }
    );
  }, [category]);

  const handleCategoryClick = (category) => {
    //alert("clicked on store");
    setCategory(category);
    setDisplay("category");
  };

  const handleStoreClick = (store) => {
    //alert("clicked on store");
    setStore(store);
    setDisplay("store");
    console.log("store", store);
    console.log("setdisplay", setDisplay);
    // setDisplay{"store"};
  };

  return (
    <div className="category">
      <div className="category-left">
        <h2>{category.title}</h2>
        <div className="category-box-box">
          {categories.map((category) => {
            return (
              <CategoryBox
                category={category}
                key={category.title}
                handleCategoryClick={handleCategoryClick}
              />
            );
          })}
        </div>
      </div>
      <div className="category-right">
        {stores.map((store) => {
          return (
            <Store2Prods
              store={store}
              key={store.storeId}
              handleStoreClick={handleStoreClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
