import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Age} from './age'

$(document).ready(function() {
  $("#dob_form").submit(function(event) {
    event.preventDefault();
    var dob = $("#dob_input").val();
    var user = new Age(dob);
    var ageYears = user.ageYears();

    $("#output").text(`Your precise age in years: ${ageYears}`)
  })



})
