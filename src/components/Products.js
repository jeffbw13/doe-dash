import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ store, orderItem }) => {
  return (
    <>
      <div className="products">
        {store.products.map((product) => {
          return (
            <ProductCard
              product={product}
              orderItem={orderItem}
              key={product._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;

// {store.products.map((product) => {
//   return <ProductCard product={product} />;
// })}
