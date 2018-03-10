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
