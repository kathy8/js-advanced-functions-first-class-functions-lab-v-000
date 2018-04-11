// Code your solution in this file!

//returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers 
//as an argument and return the first two drivers in the array.
//should return a new array containing the first two drivers
// from the passed-in array 

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};
  //returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers 
  //as an argument and return the last two drivers in the 
  //array.

  //should be assigned to a constant 
  const returnLastTwoDrivers = function (array) {
   return array.slice(array.length - 2, array.length);
  };