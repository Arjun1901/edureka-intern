// Rest and Spread Operator. (...)
// Introduced in ES6.

// Used in collections to help with multiple values.

// Using spread operator
// Converts array into individual values.

const indianCars = ["Tata", "Mahindra", "Maruti"];
const usCars = ["Tesla", "Ferrari", "Ford"];

// create another array with values from both these array.
console.log(indianCars);
console.log(usCars);
// indianCars.concat(usCrs);
 //const result1 = [indianCars+usCars]; // ['Tata,Mahindra,MarutiTesla,Ferrari,Ford']
const result = [...indianCars, ...usCars]; // [ 'Tata', 'Mahindra', 'Maruti', 'Tesla', 'Ferrari', 'Ford' ]
console.log(result);
console.log(result1);