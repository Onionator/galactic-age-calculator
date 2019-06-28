import $ from 'jquery';
import { calcAge } from './galactic_calc.js';
import { ageIsNumber } from './galactic_calc.js';
import { galacticAge } from './galactic_calc.js';
import { yearsLeftToLive } from './galactic_calc.js';

function galacticAgeOnAllPlanets() {
  let age = new Date(1996, 4, 25);
  let yearsOld = calcAge(age);
  // name of the planets
  const planet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  if (ageIsNumber(yearsOld)) {
    let ageOnPlanets = galacticAge(yearsOld);
    console.log(ageOnPlanets);
    // output the user's age on each planet
    for (let i = 0; i < ageOnPlanets.length; i++) {
      $('#solution').append(`<li>Your age on ${planet[i]} is ${ageOnPlanets[i]}.</li>`);
    }
    //output the user's life expectancy on each planet.
    let expectancyOnPlanets = galacticAge(yearsLeftToLive(yearsOld));
    for (let i = 0; i < ageOnPlanets.length; i++) {
      $('#solution').append(`<li>Your life expectancy on ${planet[i]} is ${expectancyOnPlanets[i]} more ${planet[i]} years.</li>`);
    }
  } else {
    console.log('main- log 1-- Error in calls.');
  }
}

galacticAgeOnAllPlanets();
