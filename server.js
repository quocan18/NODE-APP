const http = require("http"); // Import http module

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "text.html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
});

server.listen(3000); // Server sẽ chạy trên cổng 3000
