const request = require('request');
const breedName = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`


request(URL, (error, response, body) => {
  if (error) {
    console.log("filled to request details", error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description)
  } else {
    console.log(`Breed not found ${breedName}`);
  }

});


