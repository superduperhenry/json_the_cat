const request = require("request");

const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (response.statusCode !== 200) {
    throw error;
  }

  const data = JSON.parse(body);
  if (typeof data[0] === "undefined") {
    console.log(`No Results Found`);
    return;
  }
  console.log(data[0]);
});