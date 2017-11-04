// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Reservations
// =============================================================
var reservations = [
  {
    routeName: "kay",
    name: "Kay",
    phoneNumber: "999-999-999",
    email: "kkkk@gmail.com",
    uniqueID: "kak"
  },
  {
    routeName: "jay",
    name: "Jay",
    phoneNumber: "999-999-999",
    email: "kkkk@gmail.com",
    uniqueID: "kak"
  }
];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "hmpg.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "resvervation.html"));
});

// Get all tables
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Get all waitlist
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




