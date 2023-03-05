const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    console.log("You are in homepage");
    res.end("You are in homepage");
  } else if (req.url == "/about") {
    console.log("You are in about page");
    res.end("You are in about page");
  } else if (req.url == "/contact") {
    res.end("You are in contact page");
  } else if (req.url == "/apiuser") {
    fs.readFile(`${__dirname}/apijson.json`, "UTF-8", (err, data) => {
      console.log(data);
      const JSONdata = JSON.parse(data);
      res.end(JSONdata[0].title);
      res.writeHead(200, { "content-type": "application/json" });
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page doesnt exist</h1>");
  }
  //   res.end("Hello From the other sides");
});

server.listen(8200, "127.0.0.1", () => {
  console.log("Listening to port number 8200");
});
