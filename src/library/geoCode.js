//  get geocode from address
import axios from "axios";
import GOOGLEMAPS_API_KEY from "../config/googlemaps.js";

const geoCode = (address = "1301 14th Avenue San Francisco CA US") => {
  //  need key
  //  https://maps.googleapis.com/maps/api/geocode/json?address=1301 14th Avenue San Francisco CA US&key=
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLEMAPS_API_KEY}&address=${address}`;
  return axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data.results[0];
      //       return response.data.results[0].geometry.location;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export default geoCode;

/*
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLEMAPS_API_KEY}&address=${address}`;
  axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data.results[0].geometry.location;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
*/
