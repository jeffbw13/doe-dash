import React from "react";
//import chicken from "../assets/icons/chicken.jpg";
const images = require.context("../assets/icons/categories/", true);

const CategoryBox = ({ category, handleCategoryClick }) => {
  const imageUrl = images(`./${category.id}.jpg`).default;

  return (
    <div className="category-box" onClick={() => handleCategoryClick(category)}>
      <img src={imageUrl} />
      <p>{category.title}</p>
    </div>
  );
};

export default CategoryBox;
