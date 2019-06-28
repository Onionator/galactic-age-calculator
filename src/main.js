import { calcAge } from './galactic_calc.js';
import { ageIsNumber } from './galactic_calc.js';
import { galacticAge } from './galactic_calc.js';
import { yearsLeftToLive } from './galactic_calc.js';

function ageOn8Planets() {
  let age = new Date(1996, 4, 25);
  let yearsOld = calcAge(age);
  if (ageIsNumber(yearsOld)) {
    galacticAge(yearsOld);
    galacticAge(yearsLeftToLive(yearsOld));
  } else {
    console.log('main- log 1-- Error in calls.');
  }
}

ageOn8Planets();
