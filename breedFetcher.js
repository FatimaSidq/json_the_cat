const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, _response, body) => {
    body = JSON.parse(body);
    return callback(error, body[0].description);
  });
};

module.exports = { fetchBreedDescription };