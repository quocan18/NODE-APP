const http = require("http"); // Import http module
const fs = require("fs");
const express = require("express"); // Import express framework
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const errorController = require("./controllers/error");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main_layout",
    extname: "hbs",
  })
);
app.set("view engine", "ejs"); // Import ejs engine
app.set("views", "views"); // Sẽ có ở trong thư mục views
const adminRoutes = require("./routes/admin"); // Import router admin
const shopRoutes = require("./routes/shop");
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Cung cấp static file cho tất cả request
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); // Phân luồn đường dẫn cho admin
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000); // Server sẽ chạy trên cổng 3000
