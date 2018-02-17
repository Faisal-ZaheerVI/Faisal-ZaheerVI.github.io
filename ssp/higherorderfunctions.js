var testObj = {
  programManager : 'Devontae'
};

// Dot notation, but bracket notation is preferred
testObj.name = 'MissionBit';

// Adding values using bracket notation
// Can only use bracket notation with string values
// testObj.1 = 'one'; => WRONG
// testObj[1] = 'one'; => RIGHT | Output => '1' : 'one'
testObj['place'] = 'China Town';

var meeting = 'WhereWeWillBeSaturday';

testObj[meeting] = 'In the office';

// console.log(testObj);





// INTRO TO HIGHER ORDER FUNCTIONS

// Higher order functions is like storing money at a bank, the money is meant to be stored in the bank to be used at a later date

var testArray = [1,2,3,4,5,6,7];

var each = function(collection, someFunction) {
  // It will take a function and a collection as a parameters
  // Loop through the collection
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      // Call someFunction on each value (each testArray value)
      someFunction(collection[i], i);
    }
  }
  else {
    for (var key in collection) {
      someFunction(collection[key], key);
    }
  }
};

// each(testArray, function(element, index) {
//   console.log('The index of => ' + element + ' is ', index);
// });

// Calling each with an anonymous function
// each(testObj, function(value, key) {
//   console.log('The value at => ' + key + ' is => ' + value);
// })

// var sum = function(element) {
//   console.log(element + 100);
// }

// Calling each with a function expression
// each(testArray, sum);




// USING each WITH A CALLBACK THAT RETURNS THE VALUES

// Creating a higher order function which uses each

var map = function(collection, callback) {
  // Create a variable that is an array
  var results = [];
  
  each(collection, function(element) {
    // Push the mutated/modified elements to the results array
    results.push(callback(element));
  });
  // Return the results
  return results;
};

var test = map(testArray, function(element) {
  return element * 5;
});

console.log(test);

