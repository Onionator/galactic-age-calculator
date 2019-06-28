import { calcAge } from './galactic_calc.js';
import { ageIsNumber } from './galactic_calc.js';
import { galacticAge } from './galactic_calc.js';
import { yearsLeftToLive } from './galactic_calc.js';

function ageOn8Planets() {
  let age = new Date(1996, 4, 25);
  if (ageIsNumber(calcAge(age))) {
    galacticAge(calcAge(age));
    galacticAge(yearsLeftToLive(calcAge(age)));
  } else {
    console.log('main- log 1-- Error in calls.');
  }
}

ageOn8Planets();
