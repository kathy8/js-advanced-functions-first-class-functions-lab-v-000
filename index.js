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

//selectingDrivers — This is an array containing two elements: the two functions that we previously defined 
//(returnFirstTwoDrivers() and returnLastTwoDrivers()).
//has the `returnFirstTwoDrivers` function to as its first element 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that 
//takes in a fare as an argument and quadruples the fare.
