function calcArea(rad,PI=3.14) {
    return PI * rad * rad;
}
function getValues(n1,n2,n3, ...params) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(params);
    
}
module.exports = {calcArea, getValues};
/* module.exports = {
    calcArea: calcArea,
    getValues: getValues
}; */
/* let fn = require("./producer");*/
console.log(fn.calcArea(5)); // Default PI is used
fn.getValues(1,2,3,4,5,6); // rest operator will collect all the values in an array
// export default calcArea; // if you want to export only one function