var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
//var port = process.env.PORT || 9000;
var reservations = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*Handle the get requests to the specified URL*/
app.get("/", (req, res) => {
  /*Sends a string to the client*/
  res.send("<h1>Working!</h1>");
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/viewtables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  newReservation.routeName = newReservation.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

app.get("/api/tables", function(req, res) {
  console.log(reservations);
  res.json(reservations);
});

/*Creates a server and listens at port 3000 on localhost*/
app.listen(3000);
console.log("Running at port 3000");
/*Set up routes*/
