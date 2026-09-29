const math = require("./math");
const circle = require("./circle");
const { hi, hello } = require("./http-server/index.js");
// import add from "./math.js";

console.log("Add :", math.add(2, 3));
console.log("Subtract :", math.subtract(5, 2));
console.log("Area of circle :", circle.area(5));
console.log("Circumference of circle :", circle.circumference(5));

console.log(hi);
console.log(hello);

// console.log("Add :", add(2, 3));
