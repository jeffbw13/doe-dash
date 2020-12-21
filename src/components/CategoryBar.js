import React from "react";
import categories from "../library/categories";
import CategoryBox from "./CategoryBox";
//  this retrieves where in /dist the images now reside
//const images = require("../assets/icons/#chicken.jpg");

const CategoryBar = () => {
  return (
    <div className="category-bar">
      {categories.map((cat) => {
        return <CategoryBox key={cat.key} cat={cat} />;
      })}
    </div>
  );
};

export default CategoryBar;
