import React from "react";
//import chicken from "../assets/icons/chicken.jpg";
const images = require.context("../assets/icons/categories/", true);

const CategoryBox = ({ cat }) => {
  const imageUrl = images(`./${cat.id}.jpg`).default;

  return (
    <div className="category-box">
      <img src={imageUrl} />
      <p>{cat.title}</p>
    </div>
  );
};

export default CategoryBox;
