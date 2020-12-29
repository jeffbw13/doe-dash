import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import GOOGLEMAPS_API_KEY from "../config/googlemaps.js";

const Map = ({ stores, userLoc }) => {
  const [center, setCenter] = useState({ lat: 37.75, lng: -122.44 });
  const [zoom, setZoom] = useState(12.2);

  // let center = {
  //   lat: this.props.user.latitude,
  //   lng: this.props.user.longitude
  // };

  const CurrentPin = ({ text }) => {
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

  const NotherPin = ({ text }) => {
    return (
      <div>
        <span
          style={{
            fontSize: "14px",
            color: "red",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {text}
        </span>
      </div>
    );
  };

  const onChildMouseEnter = () => {};
  const onChildMouseLeave = () => {};
  console.log("stores in map", stores);

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
        <CurrentPin lat={userLoc.lat} lng={userLoc.lng} text={"You"} />
        {stores.map((store) => {
          return (
            <NotherPin
              lat={store.latitude}
              lng={store.longitude}
              text={store.name}
              key={store._id}
            />
          );
        })}
        <NotherPin
          // onClick={()=>this.props.onLaundromatSelectClick(43)}

          lat={37.775}
          lng={-122.43}
          text={"W"}
        />
        <NotherPin lat={37.7739} lng={-122.429} text={"W"} />
        <NotherPin lat={37.7739} lng={-122.435} text={"W"} />
        {/* {infoBox} */}
        {/* {this.props.currentFacilityPosition === "" && this.props.currentFacilityZoom === ""
              ? null
              : <Button onClick={this.removeCenterAndZoom} style={{float: 'left', backgroundColor: 'AliceBlue', margin: '5px', border: 'solid 1px black', fontSize: '100%', boxShadow: '3px 3px 1px #888888'}}><Icon className="compass" size="large" />re-center</Button>

            } */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
