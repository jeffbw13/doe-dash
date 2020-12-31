import { useState } from "react";

const AddOn = ({
  addOn,
  addOnsOrdered,
  setAddOnsOrdered,
  totalCost,
  setTotalCost,
}) => {
  const [optionsChecked, setOptionsChecked] = useState({});
  console.log("addon");
  const addOnAddOn = (selection) => {};

  const handleInputChange = (event) => {
    console.log("event: ", event);
    const optionsCheckedX = { ...optionsChecked };
    if (event.target.type === "checkbox") {
      if (event.target.checked) {
        optionsCheckedX[event.target.name] = true;
        //  there's probably a better way than using the id field
        setTotalCost(totalCost + event.target.id * 1);
      } else {
        optionsCheckedX[event.target.name] = false;
        setTotalCost(totalCost - event.target.id * 1);
      }
    }
    setOptionsChecked(optionsCheckedX);
    const addOnsOrderedX = { ...addOnsOrdered };
    addOnsOrderedX[addOn.description] = { ...optionsChecked };
    setAddOnsOrdered(addOnsOrderedX);
  };

  return (
    <div>
      <p>{addOn.description}</p>
      {addOn.options.map((option) => {
        return (
          <div>
            <input
              name={option.option}
              id={option.price}
              type="checkbox"
              checked={optionsChecked[option.option]}
              onChange={handleInputChange}
            />
            {option.option}
            {option.price}
          </div>
        );
      })}
    </div>
  );
};

export default AddOn;

/*
      {addOn.options.map((option) => {
        return <div>{option.option}</div>;
      })}
*/
