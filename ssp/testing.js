/***********************
*  INTRO TO TESTING   *
***********************/

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
  }
}

var sum = function(num1, num2) {
  return num1 + num2;
};

// Expected to fail, because 2 + 3 = 5 not 6
/* assertEqual(sum(2, 3), 6, 'It adds numbers correctly'); */

// Example of a mistyped function that will pass the FAILED message
var wrongMultiply = function(num1, num2) {
  return num1 * num2 * 3;
};

// Expected to fail, because the function is supposed to return 6, so something in the function is mistyped
/* assertEqual(wrongMultiply(2,3), 6, 'It multiplies numbers correctly'); */
