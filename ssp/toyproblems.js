/******************************************************
  TOY PROBLEM - PRACTICE TECHNICAL INTERVIEW QUESTION
******************************************************/

// ASSUMPTIONS (3):
// Only contains letters: symbols, punctuation, numbers
// 1 string assignment; not empty
// only seperated by 1 whitespace, none at beginning or end

function isPalindrome(str) {
  var lowercase = str.toLowerCase();
  var original = lowercase.split(' ').join('');
  var reverse = lowercase.split(' ').join('').split('').reverse('').join('');
  
  return original === reverse;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("taco cat")); // true
console.log(isPalindrome("RaCe CAR")); // true
console.log(isPalindrome("race", "car")); // false



/******************
  TOY PROBLEM #2
******************/

// Write a function that takes 3 words, and returns a single count

// 2 ASSUMPTIONS, AN INPUT AND AN OUTPUT
// 1) Only 3 string arguments
// 2) No whitespaces
// Input = 3 string arguments
// Output = Number value (count)

function letterCount(str1, str2, str3) {
  return str1.length + str2.length + str3.length;
}

console.log(letterCount("word", "words", "more")); // returns count
