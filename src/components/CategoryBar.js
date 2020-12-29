import React from "react";
import categories from "../data/categories";
import CategoryBox from "./CategoryBox";

const CategoryBar = ({ setDisplay, setCategory }) => {
  const handleCategoryClick = (category) => {
    setCategory(category);
    setDisplay("category");
  };

  return (
    <div className="category-bar">
      {categories.map((category) => {
        return (
          <CategoryBox
            key={category.id}
            category={category}
            handleCategoryClick={handleCategoryClick}
          />
        );
      })}
    </div>
  );
};

export default CategoryBar;
