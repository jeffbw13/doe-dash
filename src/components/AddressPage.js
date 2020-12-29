import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import geoCodeFn from "../library/geoCode";

const AddressPage = ({
  address,
  setAddress,
  shortAddress,
  setShortAddress,
  geoCode,
  setGeoCode,
}) => {
  const onAddressChange = (address) => {
    console.log("address: ", address);
    setAddress(address);
  };

  const translateAddress = () => {
    geoCodeFn(address).then((data) => {
      console.log("returned code: ", data);
      setGeoCode(data.geometry.location);
      setShortAddress(data.formatted_address.split(",")[0]);
    });
  };
  console.log("code: ", geoCode);

  return (
    <div>
      <h1>Address page</h1>
      <input
        type="text"
        id="address"
        name="address"
        onChange={(e) => onAddressChange(e.target.value)}
      ></input>
      <button type="button" onClick={() => translateAddress()}>
        Button
      </button>
      <br />
      {geoCode.lat}
      {geoCode.lng}
      <br />
      {shortAddress}
      <br />
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
};

export default AddressPage;
