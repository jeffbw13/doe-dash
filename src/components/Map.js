import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import ReactTooltip from "react-tooltip";
import pin from "../assets/icons/pin.png";
import GOOGLEMAPS_API_KEY from "../config/googlemaps.js";

const Map = ({ stores, usrLoc }) => {
  const [center, setCenter] = useState({ lat: 37.75, lng: -122.44 });
  const [zoom, setZoom] = useState(12.2);

  const HomePin = ({ text }) => {
    return (
      <div>
        {/* <Icon name="user circle outline" color='blue' size='big' style={iconStyle}/> */}
        <span
          style={{
            fontSize: "18px",
            backgroundColor: "lightGreen",
            padding: "5px",
            borderRadius: "8px",
          }}
        >
          {text}
        </span>
      </div>
    );
  };

  const StorePin = ({ text, store }) => {
    const tip = `${store.name}\n${store.distance} mi`;

    return (
      <div
        style={{
          textAlign: "center",
          fontSize: ".7rem",
          color: "red",
        }}
      >
        {/*text*/}
        <p data-tip={tip}>
          <img style={{ width: "35px", height: "38px" }} src={pin} />
        </p>
        <ReactTooltip />
        <p style={{ marginTop: "-17px" }}>{store.categories[0]}</p>
      </div>
    );
  };

  const onChildMouseEnter = () => {};
  const onChildMouseLeave = () => {};

  return (
    <div className="map" style={{ height: "90vh", width: "47%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLEMAPS_API_KEY,
          language: "en",
        }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
      >
        {/* {facilityPins} */}
        <HomePin lat={usrLoc.lat} lng={usrLoc.lng} text={"You"} />
        {stores.map((store) => {
          return (
            <StorePin
              lat={store.latitude}
              lng={store.longitude}
              text={store.name}
              store={store}
              key={store._id}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
