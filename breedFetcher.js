const request = require("request");

const fetchBreedDescription = (breedName, callback) => {

  //Make request to endpoint with breedName
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // if error in request;
    if (error) {
      //error in domain name
      callback(error), null;
      return;
    }

    //if response has !200 status code
    if (response.statusCode !== 200) {
      callback(error, null);
      return;
    }

    //If request is good
    //Parse convert json to object
    const data = JSON.parse(body);
    //If data is empty,
    if (typeof data[0] === "undefined") {
      callback(`No Results Found!`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };