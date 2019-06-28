import './styles.css';
import './weekday.js';
import $ from 'jquery';
import 'bootstrap';
import { weekDay } from './weekday.js';

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    console.log('button works');

    // need to change the html to match
    let day = new Date($('#year').val(), $('#month').val(), $('#day').val());
    let myArmpit = day.getDay();
    console.log('myArmpit ' + myArmpit);
    $('#solution').text(`You were born on a ${weekDay(myArmpit)}. That makes you very old.`);
  });
});
