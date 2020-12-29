//  show five stores, probably by category
import React, { useState, useEffect } from "react";
import StoreCard from "./StoreCard";
import getStores from "../library/getStores";

const Show5Stores = ({ showing, setDisplay, setStore }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    //  this needs to be promise based - get rid of callback
    //  pass in showing.searchFor
    const stuff = getStores((data) => {
      //console.log("data: ", data);
      setStores(data);
    }, showing.searchFor);
  }, []);

  const handleStoreClick = (store) => {
    //alert("clicked on store");
    setStore(store);
    setDisplay("store");
    console.log("store", store);
    console.log("setdisplay", setDisplay);
    // setDisplay{"store"};
  };

  const stores2 = stores.slice(0, 2);
  const stores3 = stores.slice(2, 5);

  return (
    <>
      <div className="show-5-stores">
        <div className="show-5-stores-left">
          <h2>{showing.title}</h2>
        </div>
        <div className="show-5-stores-right">
          <div className="show-5-stores-top">
            {stores2.map((store) => {
              return (
                <StoreCard
                  store={store}
                  key={store._id}
                  handleStoreClick={handleStoreClick}
                />
              );
            })}
          </div>
          <div className="show-5-stores-bottom">
            {stores3.map((store) => {
              return (
                <StoreCard
                  store={store}
                  key={store._id}
                  handleStoreClick={handleStoreClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Show5Stores;
