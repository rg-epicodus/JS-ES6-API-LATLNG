import { scripts } from "./../js/scripts.js";


$(document).ready(function() {
  scripts.initialize();




$('#userInputLocation').submit(function(evt) {
  evt.preventDefault();
  let location = $("input[name='userInputLocation']").val();
  $("input").val("");

  console.log("Location submitted " + location);
  scripts.codeAddress(location);
});









});
