export let scripts = {

  initialize: function() {
    let latlng = new google.maps.LatLng(45.512794, -122.679565);
    let myOptions = {
      zoom: 10,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);
    console.log("map initialized");
    let geocoder = new google.maps.Geocoder();
  },

  codeAddress: function(geocoder, location, resultsMap) {

    // let map = new google.maps.Map(document.getElementById("map_canvas2"));
    let sAddress = location;
    geocoder.geocode( { 'address': sAddress}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          resultsMap.setCenter(results[0].geometry.location);
          let marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

};
