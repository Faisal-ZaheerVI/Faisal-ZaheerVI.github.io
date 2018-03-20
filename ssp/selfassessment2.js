// SELF ASSESSMENT 2 - FAISAL ZAHEER

var salesTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
 		{name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: '$1668'},
 		{name: {first: 'Denese', last: 'Dossett'}, age: 29, sales: '$9248'},
 		{name: {first: 'Douglas', last: 'Denney'}, age: 53, sales: '$5058'},
 		{name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
 		{name: {first: 'Herman', last: 'Hazell'}, age: 25, sales: '$2746'},
 		{name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: '$474'},
 		{name: {first: 'Hwa', last: 'Heidt'}, age: 53, sales: '$9607'},
 		{name: {first: 'Hyon', last: 'Hampshire'}, age: 46, sales: '$13598'},
 		{name: {first: 'Issac', last: 'Ingerson'}, age: 45, sales: '$5225'},
 		{name: {first: 'Jeraldine', last: 'Joplin'}, age: 39, sales: '$2891'},
 		{name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
 		{name: {first: 'Joleen', last: 'Jolin'}, age: 45, sales: '$15736'},
 		{name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
 		{name: {first: 'Magda', last: 'Mireles'}, age: 18, sales: '$1498'},
 		{name: {first: 'Mistie', last: 'Montealegre'}, age: 31, sales: '$6920'},
 		{name: {first: 'Nancy', last: 'Napoli'}, age: 49, sales: '$5255'},
 		{name: {first: 'Regine', last: 'Rohrbaugh'}, age: 33, sales: '$7881'},
 		{name: {first: 'Rolando', last: 'Riebel'}, age: 35, sales: '$8573'},
 		{name: {first: 'Scarlett', last: 'Stagg'}, age: 36, sales: '$7126'},
 		{name: {first: 'Sherron', last: 'Strawn'}, age: 36, sales: '$8848'},
 		{name: {first: 'Susan', last: 'Shilling'}, age: 29, sales: '$8542'},
 		{name: {first: 'Tama', last: 'Tworek'}, age: 16, sales: '$9200'},
 		{name: {first: 'Tonisha', last: 'Taunton'}, age: 41, sales: '$5219'},
 		{name: {first: 'Vergie', last: 'Villescas'}, age: 25, sales: '$8712'}];
 		
// PART 1
function isTeenager(arrayOfInformation) {
  var teenArray = [];
  
  for (i = 0; i < arrayOfInformation.length; i++) {
    if (arrayOfInformation[i].age < 20 && arrayOfInformation[i].age > 12) {
      teenArray.push(arrayOfInformation[i].name.first + ' ' + arrayOfInformation[i].name.last);
    }
  }
  
  return teenArray;
}

// PART 2
function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
  } else {
    console.log('Test ['+testName+'] failed: expected ', expected, ' but got, ', actual );
    }
}

assertObjectsEqual(isTeenager(salesTeam), ["Earline Erickson", "Jin Jeffrey", "Magda Mireles", "Tama Tworek"], "Should return a list of all teenagers on the Sales Team");

// PART 3
assertObjectsEqual(oldest(salesTeam), 'The oldest student is Alvaro Angelos', "Should return a string stating who the oldest student is with their full name");

function oldest(arrayOfInfo) {
  var oldest = '';
  var oldestAge = 0;
  
  for (i = 0; i < arrayOfInfo.length; i++) {
    if (arrayOfInfo[i].age > oldestAge) {
      oldestAge = arrayOfInfo[i].age;
      oldest = arrayOfInfo[i].name.first + ' ' + arrayOfInfo[i].name.last;
    }
  }
  
  return 'The oldest student is ' + oldest;
}

// PART 4
assertObjectsEqual(tenThousandClub(salesTeam), ['Earline Erickson', 'Hyon Hampshire', 'Jin Jeffrey', 'Joleen Jolin'], "Should return a list of all students with salaries over $10,000 dollars");

function tenThousandClub(arrayInformation) {
  var over10K = [];
  
  for (i = 0; i < arrayInformation.length; i++) {
    if (parseInt(arrayInformation[i].sales.slice(1)) > 10000) {
      over10K.push(arrayInformation[i].name.first + ' ' + arrayInformation[i].name.last);
    }
  }
  
  return over10K;
}
