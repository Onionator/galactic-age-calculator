import { ageIsNumber } from './../src/galactic_calc.js';
import { ageOnMercury } from './../src/galactic_calc.js';
import { ageOnVenus } from './../src/galactic_calc.js';
import { ageOnMars } from './../src/galactic_calc.js';
import { ageOnJupiter } from './../src/galactic_calc.js';
import { ageOnSaturn } from './../src/galactic_calc.js';
import { ageOnUranus } from './../src/galactic_calc.js';
import { ageOnNeptune } from './../src/galactic_calc.js';
import { galacticAge } from './../src/galactic_calc.js';

describe('ageIsNumber', function () {

  it('should test whether the input passed to it is a number.', function () {
    let age = new Date(1996, 4, 25);
    let current = new Date();
    let userAge = current.getFullYear() - age.getFullYear();
    console.log(`log 0- in spec-- user is ${userAge} years old.`);
    expect(ageIsNumber(userAge)).toEqual(true);
  });
});

describe('ageOnMercury', function () {

  it('should test to see if the proper age on Mercury is returned.', function () {
    let userAge = 23;
    expect(ageOnMercury(userAge)).toEqual(95);
  });
});

describe('ageOnVenus', function () {

  it('should test to see if the proper age on Venus is returned.', function () {
    let userAge = 23;
    expect(ageOnVenus(userAge)).toEqual(37);
  });
});

describe('ageOnMars', function () {

  it('should test to see if the proper age on Mars is returned.', function () {
    let userAge = 23;
    expect(ageOnMars(userAge)).toEqual(12);
  });
});

describe('ageOnJupiter', function () {

  it('should test to see if the proper age on Jupiter is returned.', function () {
    let userAge = 23;
    expect(ageOnJupiter(userAge)).toEqual(1);
  });
});

describe('ageOnSaturn', function () {

  it('should test to see if the proper age on Saturn is returned.', function () {
    let userAge = 23;
    expect(ageOnSaturn(userAge)).toEqual(0);
  });
});

describe('ageOnUranus', function () {

  it('should test to see if the proper age on Uranus is returned.', function () {
    let userAge = 23;
    expect(ageOnUranus(userAge)).toEqual(0);
  });
});

describe('ageOnNeptune', function () {

  it('should test to see if the proper age on Neptune is returned.', function () {
    let userAge = 23;
    expect(ageOnNeptune(userAge)).toEqual(0);
  });
});

describe('galacticAge', function () {

  it('should test to see if the proper ages are returned.', function () {
    let userAge = 23;
    expect(galacticAge(userAge)).toEqual(true);
  });
});






// describe('age', function () {
//
//   it('should print out the word associated with the age of the week.', function () {
//     let age = new Date(1976, 0, 8);
//     let armpit = age.getDay();
//     expect(weekDay(armpit)).toEqual('Thursday');
//   })
// })
