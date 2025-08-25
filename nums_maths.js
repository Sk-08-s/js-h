//explicitly input a number
const bal= new Number(1000.2323);
console.log(bal); // Number {10}
console.log(typeof bal); // object
console.log(bal.valueOf()); // 10
console.log(bal.toString()); // "10"
console.log(bal.toExponential(2)); // "1.00e+1"  
console.log(bal.toFixed(2)); // "10.00"
console.log(bal.toPrecision(2)); // "10"
//tolocalestring is used to convert number into string with local format
console.log(bal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // "$1,000.23"
console.log(bal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })); // "1 000,23 €"
console.log(bal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })); // "₹1,000.23"

const nu = 10;
console.log(typeof nu); // number


//maths 
console.log(Math); // Math object with properties and methods
console 