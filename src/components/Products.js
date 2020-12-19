import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ store }) => {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {store.products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;

// {store.products.map((product) => {
//   return <ProductCard product={product} />;
// })}
