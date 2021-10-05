var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var sqlite3 = require("sqlite3");
var app = express();
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({ extended: false }));

app.locals.db = new sqlite3.Database(
  path.resolve(__dirname, "database/form.db")
);
app.locals.db.run(
  "CREATE TABLE IF NOT EXISTS form( fID TEXT, fCode TEXT, fA TEXT, fA0 TEXT, fA1 TEXT, fA2 TEXT, fA3 TEXT, fB TEXT, fB0 TEXT, fB1 TEXT, fB2 TEXT, fB3 TEXT, fC TEXT, fC0 TEXT, fC1 TEXT, fC2 TEXT, fC3 TEXT)"
);


app.post("/api", function (req, res) {
  console.log(req.body.name, req.body.email, req.body.message);
  res.send("hey");
});

app.use("/send", require("./routes/send"));

app.use("/show", require("./routes/show"));

app.get("*", function (req, res) {
  res.redirect("/");
});

const port = 3000;
app.listen(port);
console.log(`Server started at ${port}`);