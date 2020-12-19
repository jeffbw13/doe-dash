//  get an array of restaurants based on criteria passed in
import axios from "axios";

const getStores = (
  callback,
  qty,
  distance = 5,
  types = [],
  categories = [],
  otherCriteria = {}
) => {
  //  need key
  //  https://maps.googleapis.com/maps/api/geocode/json?address=1301 14th Avenue San Francisco CA US&key=AIzaSyBMHccPJR_BWxpV5Ajr6H-xsjGcrf94YW8
  const url = `http://localhost:8080/store/all`;
  axios
    .get(url)
    .then(function (response) {
      //  fix this to work with promise or async/await
      callback(response.data.slice(0, 10));
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
