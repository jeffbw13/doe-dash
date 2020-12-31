//  get an array of restaurants based on criteria passed in
import axios from "axios";

const getStores = (
  callback,
  searchFor,
  distance = 5,
  userGeoCode = { lat: 37.75, lng: -122.44 }
) => {
  //  need key
  //  https://maps.googleapis.com/maps/api/geocode/json?address=1301 14th Avenue San Francisco CA US&key=AIzaSyBMHccPJR_BWxpV5Ajr6H-xsjGcrf94YW8
  //  create search query
  let qs = `?lat=${userGeoCode.lat}&lng=${userGeoCode.lng}&`;
  //qs = "";
  for (let key in searchFor) {
    if (qs === "") {
      qs = "?";
    }
    qs += key + searchFor[key];
  }
  //qs += `&lat=${37}&lng=${122}`;
  //console.log("qs: ", qs);

  const url = `http://localhost:8080/store${qs}`;
  axios
    .get(url)
    .then(function (response) {
      //  fix this to work with promise or async/await
      callback(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export default getStores;
