const crypto = require("node:crypto");

//Sync - Blocking operation
crypto.pbkdf2Sync("passqword", "salt", 500000, 50, "sha512");
console.log("First Key is generated");

//Async - Non-Blocking operation
crypto.pbkdf2("passqword", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

console.log("Hello World");
