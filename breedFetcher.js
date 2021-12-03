const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, _response, body) => {
    body = JSON.parse(body);
    error = body.length < 1 ? "Invalid breed!" : error;
    return callback(error, error ? null : body[0].description);
  });
};

module.exports = { fetchBreedDescription };