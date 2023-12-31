// The .forEach() method
//.forEach() will execute the same code for each element of an array

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitsItem) {
  console.log(`I want to eat a ${fruitsItem}`)
});

// Another way to pass a callback for .forEach() is to use arrow function syntax.
fruits.forEach(fruitsItem => console.log(`I want to eat a ${fruitsItem}`));

// We can also define a function beforehand to be used as the callback function
function printFruits(fruitsItem) {
  console.log(`I want to eat a ${fruitsItem}`);
};

fruits.forEach(printFruits);

// The .map() method
// When .map() is called on an array, 
// it takes an argument of a callback function and returns a new array

// Example 1
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map( firstCharacter => {
  return firstCharacter[0];
})

console.log(secretMessage.join(''));

// Example 2
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbs = numbers.map(number => {
  return number * 10;
});


// Example 3
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map( divideBy100 => {
  return divideBy100 / 100;
})

console.log(smallNumbers)


// The .filter() method
// .filter() returns an array of elements 
// after filtering out certain elements from the original array

// Example 1
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbs = randomNumbers.filter( lessThan250 => {
  return lessThan250 < 250;
})

console.log(smallNumbs);

// Example 2
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter( word => {
  return word.length > 7;
})

console.log(longFavoriteWords);


// The .findIndex() method
// Calling .findIndex() on an array will return 
// the index of the first element that evaluates to true in the callback function

const animalsList = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalsList.findIndex (animal => {
  return animal === "elephant";
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(startsWithS);

// The .reduce() method
// The .reduce() method returns a single value 
// after iterating through the elements of an array, thereby reducing the array.

const newNumbers = [1, 3, 5, 7];

// the reduce() method has 1 argument - the callback function 
const newSum = newNumbers.reduce( (accumulator, currentValue) => {
  console.log('The value of accumulator: '+ accumulator);
  console.log('The value of currentValue: ' + currentValue);
  return accumulator + currentValue;
});
console.log('The value of newSum: ' + newSum);

// the reduce() method has 2 arguments
// second parameter is to set an initial value for accumulator (second argument of 10)
// the first argument is the callback function
const newSum1 = newNumbers.reduce( (accumulator, currentValue) => {
  console.log('The value of accumulator: ' + accumulator);
  console.log('The value of currentValue: ' + currentValue);
  return accumulator + currentValue;
}, 10);

console.log('The value of newSum1: ' + newSum1);


// The some() method and the every() method

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// some() method 
// check if there are words that are fewer than 6 characters long in the array
// return boolean value
console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter( (word) => {
  return word.length > 5;
});
console.log(interestingWords);

// every() method
// check if every element of interestingWords has more than 5 characters
// return boolean value
console.log(interestingWords.every((word) => { 
  return word.length > 5;
}));

// A few other examples

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7); // return [ 'Edinburgh', 'Eskisehir', 'Medellin', 'Yokohama' ]

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word) // return CODECADEMY

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5); // return [ -4, 45, 70, 195, 345, 520, 995 ]

// Choose a method that will return a boolean value
nums.some(num => num < 50); // return true
nums.every(num => num < 50); // return false

