const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "dist/w10tute")));
app.listen(8080);

let mongoDb = require("mongodb");
let MongoClient = mongoDb.MongoClient;
const url = "mongodb://localhost:27017";

let db = null;
let col = null;

MongoClient.connect(url, { useUnifiedTopology: true }, function (error, client) {
  if (error) {
    console.log("Error connecting to MongoDB.");
  } else {
    console.log("Connected to MongoDB");
    db = client.db("w10db");
    col = db.collection("employees");
  }
});

app.get("/employees", (req, res) => {
  col.find().toArray(function (err, result) {
    console.table(result);
    res.send(result);
  });
});

app.post("/employees", (req, res) => {
  console.table(req.body);
  col.insertOne(req.body, function (error, result) {
    res.end();
  });
});
