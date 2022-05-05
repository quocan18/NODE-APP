const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../helper/path");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProduct: product.length > 0,
    activeShop: true,
    productCSS: true,
  }); // Render shop.pug
});

module.exports = router;
