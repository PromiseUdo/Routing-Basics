const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //   console.log(req);
  res.send("<h1>Welcome to our Home page</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact Us Page</h1>");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
