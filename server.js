const http = require("http"); // Import http module
const fs = require("fs");
const express = require("express"); // Import express framework
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin"); // Import router admin
const shopRoutes = require("./routes/shop");
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000); // Server sẽ chạy trên cổng 3000
