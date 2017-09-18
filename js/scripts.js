let apiKey = require('./../.env').apiKey;

export let scripts = {

  findLatLng: function(query, displayLatLng) {
    let apiRequest1 = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
    .then((res) => {
      res.json().then((test) => {
        console.log(test);
        let latitude = test.results[0].geometry.location.lat;
        let longitude = test.results[0].geometry.location.lng;
        displayLatLng(latitude, longitude);
      });
    })
    .catch(console.log);
  }

};
