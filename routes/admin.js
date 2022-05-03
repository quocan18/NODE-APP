const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
