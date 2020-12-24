import React from "react";

const AddOn = ({ addOn }) => {
  console.log("addon");
  return (
    <div>
      <p>{addOn.description}</p>
      {addOn.options.map((option) => {
        return (
          <div>
            <input type="checkbox" />
            {option.option}
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
