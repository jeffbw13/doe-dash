import React, { useState, useEffect } from "react";
import Map from "./Map";
import Store2Prods from "./Store2Prods";
import getStores from "../library/getStores";

const Pickup = ({ setDisplay, setStore, usrLoc }) => {
  const [stores, setStores] = useState([]);

  console.log("usrLoc", usrLoc);
  usrLoc = {} ? { lat: 37.75, lng: -122.44 } : usrLoc;

  useEffect(() => {
    //  this should be promise based - get rid of callback
    //  pass in showing.searchFor
    const stuff = getStores(
      (data) => {
        //  sort/limit should be done by api
        data.sort((a, b) => {
          return a.distance - b.distance;
        });
        setStores(data.slice(0, 20));
      },
      {},
      5,
      usrLoc
    );
  }, []);

  const handleStoreClick = (store) => {
    setStore(store);
    setDisplay("store");
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
      <Map stores={stores} usrLoc={usrLoc} />
    </div>
  );
};

export default Pickup;
