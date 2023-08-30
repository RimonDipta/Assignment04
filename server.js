/*1.It should use the http module to create an HTTP server.


2.It should listen on port 3000.


4.It should log a message to the console when it starts listening on port 3000.


5.If you request this url “/” then the response is  “This is Home Page”.


6.If you request this url “/about” then the response is  “This is About Page”.


6.If you request this url “/contact” then the response  is “This is Contact Page”.


7.If you request this url “/file-write” then fs.writeFile() method will create a file “demo.txt” and write the text “hello world” in this file.


8.And of course you need to end the server response using res.end()
*/

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is Home Page</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is About Page</h1>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is Contact Page</h1>");
    res.end();
  } else if (req.url == "/file-write") {
    fs.writeFile("demo.txt", "Hello World", function (error) {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>File Write Failed</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>File Written Successfully</h1>");
      }
      res.end();
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(3000);
console.log("Server Litsening to Port 3000");
