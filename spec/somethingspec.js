import { dayIsNumber } from './../src/weekday.js';
import { weekDay } from './../src/weekday.js';

describe('dayIsNumber', function () {

  it('should test whether the input passed to it is a number.', function() {
    let day = new Date(1976, 0, 8);
    let armpit = day.getDay();
    expect(dayIsNumber(armpit)).toEqual(true);
  });
});

describe('day', function () {

  it('should print out the word associated with the day of the week.', function () {
    let day = new Date(1976, 0, 8);
    let armpit = day.getDay();
    expect(weekDay(armpit)).toEqual('Thursday');
  })
})
