// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  // code here
  return num * 10;
};

const subtractFive = (num) => {
  // return num after subtracting five
  // code here
  return num - 5;
};

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y) {
    return true;
  } return false;
};

const lessThanNinety = num => num < 90;
  // return true if num is less than ninety
  // otherwise return false
  // code here

const greaterThanFifty = num => num > 50;
  // return true if num is greater than fiftyp
  // otherwise return false
  // code here


const add = (x, y) => x + y;
  // add x and y together and return the value
  // code here

const subtract = (x, y) => x - y;
  // subtract y from x and return the value
  // code here


const divide = (x, y) => x / y;
  // divide x by y and return the value
  // code here

const multiply = (x, y) => x * y;
  // multiply x by y and return the value
  // code here

const getRemainder = (x, y) => x % y;
  // return the remainder from dividing x by y
  // code here

const isEven = num => num % 2 === 0;
  // return true if num is even
  // otherwise return false
  // code here

const isOdd = num => num % 2 !== 0;
  // return true if num is odd
  // otherwise return false
  // code here

const square = num => Math.pow(num, 2);
  // square num and return the new value
  // code here

const cube = num => Math.pow(num, 3);
  // cube num and return the new value
  // code here

const raiseToPower = (num, exponent) => Math.pow(num, exponent);
  // raise num to whatever power is passed in as exponent
  // code here

const roundNumber = num => Math.round(num);
  // round num and return it
  // code here

const roundUp = num => Math.ceil(num);
  // round num up and return it
  // code here

const addExclamationPoint = str => `${str}!`;
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here

const getGreeting = name => `Hello ${name}!`;
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => length * width;
  // return the area of the rectangle by using length and width
  // code here

const getTriangleArea = (base, height) => (base * height) / 2;
  // return the area of the triangle by using base and height
  // code here

const getCircleArea = radius => Math.round(Math.PI * Math.pow(radius, 2));
  // return the rounded area of the circle given the radius
  // code here


const getRectangularPrismVolume = (length, width, height) => length * width * height;
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
