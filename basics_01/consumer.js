// consumer.js
import pkg from './producer.js';
const { calcArea, getValues } = pkg;

console.log(calcArea(5));       // Uses default PI
getValues(1, 2, 3, 4, 5, 6);    // Logs numbers and array

