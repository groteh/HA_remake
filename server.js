var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen('8080');

app.get("/",function(req, res) {
  fs.createReadStream('index.html').pipe(res);
});
