const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../helper/path");

router.get("/", (req, res, next) => {
  res.render("shop"); // Render shop.pug
});

module.exports = router;
