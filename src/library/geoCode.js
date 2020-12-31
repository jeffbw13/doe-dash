//  get geocode from address
import axios from "axios";
import GOOGLEMAPS_API_KEY from "../config/googlemaps.js";

const geoCode = (address = "1301 14th Avenue San Francisco CA US") => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLEMAPS_API_KEY}&address=${address}`;
  return axios
    .get(url)
    .then(function (response) {
      console.log(response);
      return response.data.results[0];
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default geoCode;
