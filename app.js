const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const sequelize = require("./util/database");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById(1)
    .then((user) => {
      req.user = user;
    })
    .catch((error) => {
      console.log(error);
    });
});
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  // .sync({force: true})
  .sync()
  .then((result) => {
    return User.findById(1);
    //console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "John", email: "test@test.com" });
    }
    return user;
  })
  .then((user) => {
    //console.log(user);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
