import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.photo} />
      <div className="product-card-text">
        <p className="card-name">{product.name}</p>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
