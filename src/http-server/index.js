const http = require("http");
const fs = require("fs");
const url = require("url");
const { hi } = require("./Hi");
const { hello } = require("./hello");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.end();
    return;
  }
  const log = `${new Date().toISOString()} - ${req.method} ${req.url} \n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Welcome to the home page!");
        break;
      case "/about":
        const username = myUrl.query.q || "Guest";
        res.end(`Hi, ${username}`);
        break;

      case "/search":
        const seachQuery = myUrl.query.q || "No search query provided";
        res.end(`Search results for: ${seachQuery}`);
        break;

      case "/signup":
        if (req.method === "GET") {
          res.end("Signup page");
        } else if (req.method === "POST") {
          res.end("Signup form submitted");
        }
      default:
        res.end("Page not found.");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server is running on port 8000");
});

module.exports = {
  hi,
  hello,
  myServer,
};
