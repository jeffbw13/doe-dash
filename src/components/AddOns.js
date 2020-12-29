import React from "react";
import closex from "../assets/icons/closex.svg";
import decrease from "../assets/icons/decrease.svg";
import increase from "../assets/icons/increase.svg";
import AddOn from "./AddOn";

const AddOns = ({ product, setModalOpen, purchaseItem }) => {
  let totalItems = 1;
  let totalCost = product.price;
  return (
    <div className="add-ons">
      <img src={closex} onClick={() => setModalOpen(false)} />
      <h1>{product.name}</h1>
      <img className="add-ons-img" src={product.photo} />
      {product.addons.map((addOn) => {
        return <AddOn addOn={addOn} key={addOn._id} />;
      })}
      <p>Preferences</p>
      Extra Instructions
      <br />
      <textarea>This is where the user can enter text...</textarea>
      If sold out
      <br />
      <select name="sold-out" id="sold-out">
        <option value="volvo">Go with merchant recommendation</option>
        <option value="saab">Refund this item</option>
        <option value="mercedes">Contact me</option>
        <option value="audi">Cancel the entire order</option>
      </select>
      <br />
      <br />
      <div className="qty-add">
        <img src={decrease} />
        <input type="text" size="4" value={totalItems} />
        <img src={increase} />
        <button
          type="button"
          onClick={() => {
            setModalOpen(false);
            purchaseItem(product);
          }}
        >
          Add to cart - {totalCost}
        </button>
      </div>
    </div>
  );
};

export default AddOns;

/*
      <img src={product.photo} />

*/
