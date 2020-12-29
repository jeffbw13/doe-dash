import React, { useState, useEffect } from "react";
import Map from "./Map";
import Store2Prods from "./Store2Prods";
import getStores from "../library/getStores";

const Pickup = ({ setDisplay, setStore, userLoc }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    //  this needs to be promise based - get rid of callback
    //  pass in showing.searchFor
    const stuff = getStores(
      (data) => {
        //console.log("stores: ", data);
        setStores(data);
      },
      { stars: "[$gt]=3" }
    );
  }, []);

  const handleStoreClick = (store) => {
    //alert("clicked on store");
    setStore(store);
    setDisplay("store");
    console.log("store", store);
    console.log("setdisplay", setDisplay);
    // setDisplay{"store"};
  };

  return (
    <div className="pickkkup">
      <div className="pickup-left">
        <h3>Restaurants Nearby</h3>
        {stores.map((store) => {
          return (
            <Store2Prods
              store={store}
              key={store.storeId}
              handleStoreClick={handleStoreClick}
            />
          );
        })}
      </div>
      <div className="pickup-right"></div>
      <Map stores={stores} userLoc={userLoc} />
    </div>
  );
};

export default Pickup;
