/************************************************
        Saturday March 10th, 2018
  Higher Order Functions Practice/Improvement
************************************************/

let testArray = [1,2,3,4,5];

const each = (collection, func) => {
  if(Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      func(collection[i], i);
    }
  }
  else {
    for (let key in collection) {
      func(collection[key], key);
    }
  }
};

let storeOfValues = {};

each(testArray, function(element) {
  //element *= 3;
  storeOfValues[element * 3] = element * 3;
});

console.log(storeOfValues);

// MAP function
// Input = A collection and a callback
// Output = Array
// Constraints = No 
// Edgecases = No 

const map = (collection, callback) => {
  let results = [];
  
  each(collection, (element) => {
    results.push(callback(element));
  });
    
  return results;
};


// For each function, would have to break the lines
// For map function, can do on same line
let test = map(testArray, (element) => element * 3);

let test1 = map(testArray, (element) => {
  // let obj = {};
  // obj[element] = element;
  // return obj;
  
  // DONE IN ONE LINE
  return {[element]: element};
});
console.log(test1);

// FILTER function
// Input = Collection and a callback resolves to a Boolean
// Output = Array filled with elements that pass the callback
// Constraints = none
// Edgecases = none
const filter = (collection, predicate) => {
  let filteredArray = [];
  
  each(collection, (element) => {
    predicate(element) ? filteredArray.push(element) : null;
  });
  
  return filteredArray;
};

let test2 = filter(testArray, (element) => element === 3 || element === 4);
console.log(test2);

let stringArray = ['Zebra', 'Yao', 'Let', 'zumba'];

let test3 = filter(stringArray, (i) => i[0].toLowerCase() === 'z');

console.log(test3);

// REJECT function
// Input = Collection and a callback resolves to a Boolean
// Output = Array filled with elements that do not pass the callback
// Constraints = none
// Edgecases = none
const reject = (collection, predicate) => {
  var rejectedResults = [];
  
  each(collection, (element) => {
    !predicate(element) ? rejectedResults.push(element) : null;
  });
  
  return rejectedResults;
};

let test4 = reject(stringArray, (i) => i[0].toLowerCase() === 'z').join(' and ');
console.log(test4);

const rejectUsingFilter = (collection, predicate) => {
  return filter(collection, (element) => !predicate(element));
};

const filterUsingReject = (collection, predicate) => {
  return reject(collection, (element) => !predicate(element));
};

let test5 = rejectUsingFilter(stringArray, (element) => element[0].toLowerCase() === 'z').join(' and ');
let test6 = filterUsingReject(stringArray, (element) => element[0].toLowerCase() === 'z').join(' and ');

console.log('Words with Z are: ' + test5);
console.log('Words without Z are: ' + test6);

// REDUCE function
// Input = Collection, callback (iterator), and an accumulator
// Output = accumulator
// Constraints = none
// Edgecases = Account for when the accumulator is not passed in during call time; If the accumulator is not provided

const reduce = (collection, iterator, accumulator) => {
  each(collection, (element) => {
    !accumulator ? accumulator = element : accumulator = iterator(accumulator, element);
  });
  
  return accumulator;
};

let test7 = reduce(testArray, (e, next) => e + next);
console.log(test7);

let test8 = reduce(stringArray, (firstElement, nextElement) => {
  // METHOD 1
  firstElement['oneString'] = stringArray.join(' ');
  return firstElement;
}, {});

// METHOD 2 
let sumObj = (obj, str) => {
  !obj.str ? obj.str = str : obj.str = obj.str + ' ' + str;
  return obj;
}
let test8_2 = reduce(stringArray, sumObj, {});

// Output should be 
// { 'oneString' : 'Zebra Yao Let zumba' }
console.log(test8);
console.log(test8_2);

