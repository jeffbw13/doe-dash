import { useState, useEffect } from "react";

const AddOn = ({
  addOn,
  addOnsOrdered,
  setAddOnsOrdered,
  totalCost,
  setTotalCost,
}) => {
  const [optionsChecked, setOptionsChecked] = useState({});

  const handleInputChange = (event) => {
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
  };

  useEffect(() => {
    const addOnsOrderedX = { ...addOnsOrdered };
    addOnsOrderedX[addOn.description] = { ...optionsChecked };
    setAddOnsOrdered(addOnsOrderedX);
  }, [optionsChecked]);

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
