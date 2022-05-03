const http = require("http"); // Import http module
const fs = require("fs");
const express = require("express"); // Import express framework
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin"); // Import router admin
const shopRoutes = require("./routes/shop");
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes); // Phân luồn đường dẫn cho admin
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000); // Server sẽ chạy trên cổng 3000
