// Array => Collection of multiple values.
// Array stores data based on indexes.
// Indexes starts at 0

// 1. Creating the array 0  1   2   3   4   5
const arrayOfNumbers = [10, 20, 43, 21, 98, 54];

// 2. How to access one value from array
console.log(arrayOfNumbers[1]+arrayOfNumbers[3]);

// 3. How to add a value to array
arrayOfNumbers.push(30);
console.log(arrayOfNumbers);

// 4. How to remove a value from array.
arrayOfNumbers.pop();
console.log(arrayOfNumbers);


// 5. How to insert an element anywhere using index.
//  [10, 20, 43, 21, 98, 54];
arrayOfNumbers.splice(2,0, 50);
arrayOfNumbers.splice(3,0, 51);
arrayOfNumbers.splice(4,0, 52);
// [10, 20, 50, 43, 21, 98, 54];
console.log(arrayOfNumbers);

// 6. How to delete an element usign index.
// 10, 20, 50, 43, 21, 98, 54  
arrayOfNumbers.splice(2, 3);
// 10, 20, 43, 21, 98, 54
// 10, 20, 98, 54
console.log(arrayOfNumbers);

// 7. How to get size of array.
console.log(arrayOfNumbers.length);


// 8.How to get part of an array

const subArray=arrayOfNumbers.slice(1,4);
console.log(subArray);

// How to find an element based on condition

const result=arrayOfNumbers.find(e=> e==43);
console.log(result);

// How to find multipe elements in array based on a condition

const numbergreaterthan40=arrayOfNumbers.filter(e=> e>40);
console.log(numbergreaterthan40);

// How to find an element based on condition

const indexofelement=arrayOfNumbers.findIndex(e=> e==43);
console.log(indexofelement);