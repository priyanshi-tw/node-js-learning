const fs = require("fs");
// const os = require("os");

// Synchronous file write
// fs.writeFileSync("hello.txt", "Hello from Node.js!");

//Asynchronous file write
// fs.writeFile("hello.txt", "Hello from Node.js Asynchronous!", (err) => {
//   console.error(err);
// });

// Synchronous file read
// const data = fs.readFileSync("./contact.txt", "utf-8");
// console.log(data);

// Asynchronous file read
// fs.readFile("./contact.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.appendFileSync("./contact.txt", "\nThis is an appended line.");

// fs.cpSync("./contact.txt", "./contact_copy.txt");
// fs.unlinkSync("./contact_copy.txt");
console.log(fs.statSync("./contact.txt"));
// console.log(os.cpus().length);
