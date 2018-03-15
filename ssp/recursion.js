/*******************************
  RECURSION - March 14th, 2018
*******************************/

var testArray = [3,4,5,6,7,8];
var matrix = [[[[5]]],[6],7,[[4,5]],[9]];

var sumWithoutRecursion = function(list) {
  return list.reduce((acc, curr) => {
   return acc + curr;
 });
};

// Using recursive WITH a helper function
var sumWithRecursion = function(list) {
  var sum = 0;
  var levels = 0;
  //create a helper function to do the recursive call
  function recursiveCall(arr) {
    //base case
    if (arr.length === 0) {
      return;
    }
    
    else {
      //recursive call
      console.log('The sum at this point is  => : ', sum);
      console.log('The arr at this point is  => : ', arr);
      sum += arr.pop();
      console.log('The levels at this point is  => : ', levels);
      levels++;
      console.log('-------------end of function call------------');
      recursiveCall(arr);
    }
  }
  //Return a number
  recursiveCall(list);
  return sum;
};

console.log(sumWithRecursion(testArray));//33

var testArray = [3,4,5,6,7,8];
var matrix = [[[[5]]],[6],7,[[4,5]],[9]];

// Using recursive WITHOUT a helper function
const recursiveSum = (list) => {
  return list.reduce((total, curr) => {
    return Array.isArray(curr) ? total += recursiveSum(curr) : total += curr;
  }, 0); // The zero is the starting total
};

console.log(recursiveSum(testArray));  // 33
console.log(recursiveSum(matrix)); // 36

var sumWithLoop = function(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++) {
    Array.isArray(list[i]) ? total += sumWithLoop(list[i]) : total += list[i];
  }
  return total;
};

console.log(sumWithLoop(matrix));

var testArray = [3,4,5,6,7,8];
var matrix = [[[[5]]],[6],7,[[4,5]],[9]];

var sumWithShift = function(list) {
  var results = 0;
  
  while ( (i = list.shift()) !== undefined) {
    results += i;
  }
  
  return results;
};

console.log(sumWithShift(testArray));

var testArray = [3,4,5,6,7,8];
var matrix = [[[[5]]],[6],7,[[4,5]],[9]];


// NOT WORKING
var totalSum = 0;
var sumWithShift = function(list) {
  if (list.length === 0) {
    return;
  }
  else {
    if (Array.isArray(list[0])) {
      sumWithShift(list.shift());
    }
    else {
      totalSum += list.shift();
    }
    sumWithShift(list);
  }
};

// console.log(totalSum);

// console.log(sumWithShift(testArray));
// console.log(sumWithShift(matrix));

// Using a While Loop
var sumUsingWhile = function(list) {
  var total = 0;
  while(list.length) {
    var something = list.shift();
    Array.isArray(something) ? total += sumUsingWhile(something) : total += something;
  }
  return total;
};

console.log(sumUsingWhile(matrix));
