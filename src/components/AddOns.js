import React, { useState } from "react";
import closex from "../assets/icons/closex.svg";
import decrease from "../assets/icons/decrease.svg";
import increase from "../assets/icons/increase.svg";
import AddOn from "./AddOn";

const AddOns = ({ product, setModalOpen, orderItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [addOnsOrdered, setAddOnsOrdered] = useState({});
  const [totalCost, setTotalCost] = useState(product.price);

  const calcTotal = () => {};

  const formatOrderAndSubmit = () => {
    product.addOnsOrdered = addOnsOrdered;
    product.totalCost = totalCost; //  this is the cost for ONE item
    product.quantity = quantity;
    orderItem(product);
    setModalOpen(false);
  };

  return (
    <div className="add-ons">
      <img src={closex} onClick={() => setModalOpen(false)} />
      <h1>{product.name}</h1>
      <img className="add-ons-img" src={product.photo} />
      {product.addons.map((addOn) => {
        return (
          <AddOn
            addOn={addOn}
            addOnsOrdered={addOnsOrdered}
            setAddOnsOrdered={setAddOnsOrdered}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            key={addOn.description}
          />
        );
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
        <img src={decrease} onClick={() => setQuantity(quantity - 1)} />
        <input type="text" size="4" value={quantity} />
        <img src={increase} onClick={() => setQuantity(quantity + 1)} />
        <button type="button" onClick={() => formatOrderAndSubmit()}>
          Add to cart - {totalCost * quantity}
        </button>
      </div>
    </div>
  );
};

export default AddOns;

/*
      <img src={product.photo} />

*/
