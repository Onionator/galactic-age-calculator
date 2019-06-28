import { ageIsNumber } from './../src/galactic_calc.js';
import { ageOnMercury } from './../src/galactic_calc.js';
import { ageOnVenus } from './../src/galactic_calc.js';

describe('ageIsNumber', function () {

  it('should test whether the input passed to it is a number.', function () {
    let userAge = 23;
    expect(ageIsNumber(userAge)).toEqual(true);
  });
});

describe('ageOnMercury', function () {

  it('should test to see if the proper age on Mercury is returned.', function () {
    let userAge = 23;
    expect(ageOnMercury(userAge).toEqual(95));
  });
});

describe('ageOnVenus', function () {

  it('should test to see if the proper age on Venus is returned.', function () {
    let userAge = 23;
    expect(ageOnVenus(userAge).toEqual(37));
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
