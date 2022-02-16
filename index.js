const http = require("http");
const fs = require("fs");

function parseFiles(fileName, res) {
  fs.readFile(fileName, (err, content) => {
    if (err) {
      console.log("error occured");
      res.statusCode = 404;
      res.end("File not found");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(content);
    res.end();
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    parseFiles("index.html", res);
  } else if (req.url === "/about") {
    parseFiles("about.html", res);
  } else if (req.url === "/contact-me") {
    parseFiles("contact-me.html", res);
  } else {
    console.log(req.url);
    parseFiles("404.html", res);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
