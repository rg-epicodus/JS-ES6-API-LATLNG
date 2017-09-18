import { scripts } from "./../js/scripts.js";

$(document).ready(function() {

  function displayLatLng(latitude, longitude) {
    $('#latitude').html(`<p>Latitude : ${latitude}`);
    $('#longitude').html(`<p>Longitude : ${longitude}`);

  };

  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    let query = $("input[name='userInputQuery']").val();
    $("input").val("");
    $('#displayQuery').html(`<p>Your input was : ${query}`);
    scripts.findLatLng(query, displayLatLng);
  })

});
