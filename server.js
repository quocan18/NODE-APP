const http = require("http"); // Import http module
const fs = require("fs");
const express = require("express"); // Import express framework
const app = express();
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action=" / message,
      " method=",
      POST,
      "><input type=",
      text,
      " name=",
      message,
      "><button type=",
      submit,
      ">Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text.html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000); // Server sẽ chạy trên cổng 3000
