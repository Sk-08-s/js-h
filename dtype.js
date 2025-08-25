//7 primitive types string, number, boolean, null, undefined, symbol, bigint
// reference types: object, function, array(including null, which is an object in JS) non primitive
// js is dynamically typed language
// typeof operator returns the type of a variable
// no special for decimal type, it is considered as number

const a = 10; // number
const b = 'hello'; // string
const c = true; // boolean
const d = null; // object (special case)
const e = undefined; // undefined
const f = Symbol('sym'); // symbol
//two same symbols are not equal
const g = BigInt(12345678901234567890); // bigint
const big =346648638764785678462n;
const h = { key: 'value' }; // object
let myobj = {
    name: 'John',
    age: 30,
}
const i = [1, 2, 3]; // array (which is also an object)
const j = function() {}; // function
const myfn = function() {
    console.log('Hello, World!');
}

console.log(typeof a); // "number"
console.log(typeof b); // "string"
console.log(typeof c); // "boolean"
console.log(typeof d); // "object"
console.log(typeof e); // "undefined"
console.log(typeof f); // "symbol"
console.log(typeof g); // "bigint"
console.log(typeof h); // "object"
console.log(typeof i); // "object"
console.log(typeof myobj); // "function"
console.log(typeof j); // "function" function object is a special type of object
console.log(typeof myfn); // "function"
