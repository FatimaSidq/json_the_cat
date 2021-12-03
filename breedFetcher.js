const request = require("request")

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error || response.statusCode !== 200){
    console.log(error, response)
  }
  body = JSON.parse(body);
  if (body.length < 1){
    console.log("Invalid breed!")
    process.exit();
  }
  console.log(body[0].description)
})