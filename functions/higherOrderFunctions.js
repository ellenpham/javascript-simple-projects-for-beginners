// Example 1
const increment = (salary) => {
    const revisedSalary = salary + 5;
    console.log(revisedSalary);
    return revisedSalary;
  }
  
const incrementHolder = increment;
  
incrementHolder(5500); // return 5505


// Example 2 
// The getFunctionString accepts a function as a parameter
// which makes it a higher-order function
let multiplyTwoValues = (val1, val2) => { 
  return val1 * val2; 
}

let square = (val) => { 
  return val * val; 
}

let getFunctionString = (func) => { 
  return func.toString(); 
}

let result = multiplyTwoValues(2, 2);
square(result); // return 16


// Example 3
let cb = (n1, n2) => {return n1 + n2};

let hof = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
}

hof(cb) // 'this function returned 8'


// Example 4
const addTwo = num => {
  return num + 5;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 5;
  let checkB = func(val);

  if (checkA === checkB) {
    return func(val);
  } else {
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 10)); // return 15



