
// determines if the user's input is a number
export function ageIsNumber(number) {
  if (Number.isInteger(number)) {
    console.log(`log 1-- the users age in earth years is: ${number}.`);
    return true;
  } else {
    return false;
  }
}

// changes the user's input to be the user's age on Mercury
export function ageOnMercury(number) {
  // 1 Mercury year = .24 Earth years
  number = parseInt(number / .24);
  console.log(`log 2-- the users age in Mercury years is: ${number}.`);
  return
}

export function ageOnVenus(number) {
  // 1 Venus year = .24 Earth years
  number = parseInt(number / .616);
  console.log(`log 3-- the users age in Venus years is: ${number}.`);
  return
}

// export function weekDay(day) {
//   console.log('in weekDay');
//   if (dayIsNumber(day)) {
//     const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',  'Saturday'];
//     for (let i = 0; i < 7; i++) {
//       if (day === i) {
//         return daysOfTheWeek[i];
//       }
//     }
//   } else {
//     return ('Please enter a valid date in number format.');
//   }
// }
