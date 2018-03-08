// EXERCISE 1
function billTotal(subtotal) {
  var total = 0;
  var tip = 0.15;
  var tax = 0.095;
  total = (tip * subtotal) + (tax * subtotal) + subtotal;
  return total;
}

// EXERCISE 1 - Alternate Solution by Maurice
const billTotal = (subtotal) => subtotal + (subtotal * 0.15) + (subtotal * 0.095);

// EXERCISE 2
function range(start, end) {
  // YOUR CODE HERE
  var arr = [];
  for (var i = start; i < end; i++) {
    arr.push(i);
  }
  return arr;
}

// EXERCISE 3
function getFullName (obj) {
  if (obj.name.middle) {
    return obj.name.first + " " + obj.name.middle + " " + obj.name.last;
  }
  else {
    return obj.name.first + " " + obj.name.last;
  }
}

// EXERCISE 3 - Alternate Solution by Maurice
function getFullName (obj) {
  return obj.name.middle ? obj.name.first + " " + obj.name.middle + " " + obj.name.last : obj.name.first + " " + obj.name.last;
}

// EXERCISE 4
function longestName(people) {
  // TODO: Your code here
  var list = [];
  var long = 0;
  var longest;
  var testObj = {};
  var longObj = {};
  var age = [];
  var longestAge;
  var finalObj = {};
  
  for (i = 0; i < people.length; i++) {
    var personName = people[i].name;
    var personAge = people[i].age;
    if (personName.middle) {
      var fullNameWithMiddle = personName.first + ' ' + personName.middle + ' ' +personName.last;
      list.push(fullNameWithMiddle);
      age.push(personAge);
    }
    else {
      var fullName = personName.first + ' ' + personName.last;
      list.push(fullName);
      age.push(personAge);
    }
  }
  
  for (i = 0; i < list.length && age.length; i++) {
    if (list[i].length > long) {
      long = list[i].length;
      longest = list[i];
      longestAge = age[i];
    }
  }
  
  testObj.first = longest.split(' ');
  longObj.first = testObj.first[0];
  longObj.last = testObj.first[2] || testObj.first[1];
  if (testObj.first[2]) {
    longObj.middle = testObj.first[1];
  }
  finalObj.name = longObj;
  finalObj.age = longestAge;
  
  return finalObj;
}

// EXERCISE 4 - Alternate Solution by Sam
function longestNameAlternate(people) {
  var fullNamesArray = people.map(getFullName);
  var longestName = getLongestWord(fullNamesArray);
  for (i = 0; i < people.length; i++) {
    if (getFullName(people[i]) === longestName) {
      return people[i];
    }
  }
  
}

function getLongestWord(arr) {
  arr.sort(function(a, b) {
    return a.length - b.length;
  });
  return arr[arr.length - 1];
}

// EXERCISE 4 - Alternate Solution by Maurice
const longestName2 = (people) => {
  var longestNameObject = people[0];
  
  for (var i = 0; i < people.length; i++) {
    if (getFullName(people[i]).length > getFullName(longestNameObject.length)) {
      longestNameObject = people[i];
    }
  }
  
  return longestNameObject;
};
