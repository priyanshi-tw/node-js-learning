const { add } = require("./math");
console.log("Hello World");

//even if zero is given as time, it will be executed after the current execution context is completed
// This is will be called ASA main thread is available to execute it. It will be added to the event loop queue and will be executed when the main thread is free.
setTimeout(() => {
  console.log("Call me ASAP");
}, 0);

setTimeout(() => {
  console.log("Call me after 2 seconds");
}, 2000);

var a = 10;
var b = 20;

console.log("Add :", add(a, b));
