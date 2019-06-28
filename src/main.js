import './styles.css';
import $ from 'jquery';
import { calcAge } from './galactic_calc.js';
import { ageIsNumber } from './galactic_calc.js';
import { galacticAge } from './galactic_calc.js';
import { yearsLeftToLive } from './galactic_calc.js';

// tell the user how old he is on each planet and when he is expected to die on each planet
function galacticAgeOnAllPlanets() {
  $('#solution').text('');
  let age = new Date($('#year').val(), $('#month').val(), $('#day').val());
  let yearsOld = calcAge(age);
  // name of the planets
  const planet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  if (ageIsNumber(yearsOld)) {
    let ageOnPlanets = galacticAge(yearsOld);
    // output the user's age on each planet
    for (let i = 0; i < ageOnPlanets.length; i++) {
      $('#solution').append(`<li>Your age on ${planet[i]} is ${ageOnPlanets[i]}.</li>`);
    }
    //output the user's life expectancy on each planet.
    let expectancyOnPlanets = galacticAge(yearsLeftToLive(yearsOld));
    // test to see if the person has lived past the average life expectancy on their planet. adjust output accordingly
    if (expectancyOnPlanets[2] >= 0) {
      for (let i = 0; i < ageOnPlanets.length; i++) {
        $('#solution').append(`<li>Your life expectancy on ${planet[i]} is ${expectancyOnPlanets[i]} more ${planet[i]} years.</li>`);
      }
    } else {
      for (let i = 0; i < ageOnPlanets.length; i++) {
        $('#solution').append(`<li>You have lived ${-expectancyOnPlanets[i]} ${planet[i]} years more than ${planet[i]}'s life expectancy.</li>`);
      }
    }
  } else {
    console.log('main- log 1-- Error in calls.');
  }
}

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    galacticAgeOnAllPlanets();
  });
});
