const fs = require("fs");

const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);
module.exports = class Cart {
  static addProduct(id, productPrice) {
    //Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (err) {
        cart = JSON.parse(fileContent);
      }
      // Tìm có sản phẩm nào có sẵn trong giỏ hàng
      const existingProductIndex = cart.products.find((prod) => prod.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Nếu có sản phẩm trong giỏ hàng thì tăng thêm số lượng
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
