import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Age} from './age'

$(document).ready(function() {
  $("#dob_form").submit(function(event) {
    event.preventDefault();
    var dob = $("#dob_input").val();
    var age = new Age(dob);
    console.log(dob, age);
  })


})
