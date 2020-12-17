//  get geocode from address
import axios from 'axios';

function geocode = () +> {
  //  need key
  //  https://maps.googleapis.com/maps/api/geocode/json?address=1301 14th Avenue San Francisco CA US&key=
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${}`;
  axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}
