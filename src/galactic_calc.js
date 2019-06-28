
// determines if the user's input is a number
export function ageIsNumber(number) {
  // if the user's input is a number return true
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
  return number;
}

export function ageOnVenus(number) {
  // 1 Venus year = .616 Earth years
  number = parseInt(number / .616);
  console.log(`log 3-- the users age in Venus years is: ${number}.`);
  return number;
}

export function ageOnMars(number) {
  // 1 Mars year = 1.88 Earth years
  number = parseInt(number / 1.88);
  console.log(`log 4-- the users age in Mars years is: ${number}.`);
  return number;
}

export function ageOnJupiter(number) {
  // 1 Jupiter year = 11.86 Earth years
  number = parseInt(number / 11.86);
  console.log(`log 5-- the users age in Jupiter years is: ${number}.`);
  return number;
}

export function ageOnSaturn(number) {
  // 1 Saturn year = 29.457 Earth years
  number = parseInt(number / 29.457);
  console.log(`log 6-- the users age in Saturn years is: ${number}.`);
  return number;
}

export function ageOnUranus(number) {
  // 1 Uranus year = 84 Earth years
  number = parseInt(number / 84);
  console.log(`log 7-- the users age in Uranus years is: ${number}.`);
  return number;
}

export function ageOnNeptune(number) {
  // 1 Neptune year = 164.8 Earth years
  number = parseInt(number / 164.8);
  console.log(`log 8-- the users age in Neptune years is: ${number}.`);
  return number;
}

export function galacticAge(number) {
  // how long the planets year is relative to an earth year
  const planetYears = [.24, .616, 1, 1.88, 11.86, 29.457, 84, 164.8];
  // name of the planets with indexes maxing their years in planetYears
  const planet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  // a new array to save the results for future output
  const years = [];
  // loop through all the planets to populate the years array
  for (let i = 0; i < planetYears.length; i++) {
    // calculate the user's age on each different planet and save it in the corresponding index of the years array
    years[i] = parseInt(number / planetYears[i]);
    console.log(`log ${i + 1}- galacticAge function-- the users age in ${planet[i]} years is: ${years[i]}!`);
  }
  return true;
}

// a function that determines the user's age based on the current year and the year the user was born
export function calcAge(birthday) {
  // get the current date
  const current = new Date();
  // return the current year - the year of the birthday to get the age of the user
  return current.getFullYear() - birthday.getFullYear();
}

export function yearsLeftToLive(years) {
  // average life span on earth is 80 years. Because I say so!
  const averageLifeSpan = 80;
  // take the age of the user and and figure out how many earth years the user has left to live
  return averageLifeSpan - years;
}
