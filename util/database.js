var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/product";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created successfully");
  db.close();
});
