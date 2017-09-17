
  function initialize() {
      var geocoder;
      var map;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(45.512794, -122.679565);
      var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById("map_canvas"),
          myOptions);
    }

    function codeAddress() {
      var sAddress = document.getElementById("inputTextAddress").value;
      geocoder.geocode( { 'address': sAddress}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location
              });
          } else {
              alert("Geocode was not successful for the following reason: " + status);
          }
        });
    }
