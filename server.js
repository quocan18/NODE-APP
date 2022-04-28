const http = require("http"); // Import http module

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000); // Server sẽ chạy trên cổng 3000
