import React, { useState } from "react";
import AddOnModal from "react-modal";
import AddOns from "./AddOns";

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "45%",
      height: "90%",
      borderRadius: "2%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <div className="product-card" onClick={() => setModalOpen(true)}>
        <img src={product.photo} />
        <div className="product-card-text">
          <p className="card-name">{product.name}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price}</p>
        </div>
      </div>
      <AddOnModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
      >
        <AddOns product={product} setModalOpen={setModalOpen} />
      </AddOnModal>
    </>
  );
};

export default ProductCard;
