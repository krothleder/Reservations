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

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "resvervation.html"));
});

// Get all tables
app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

// Get all waitlist
app.get("/api/waitlist", function(req, res) {
	for (i=1;i<reservations.length;i++){
		res.json(reservations[i]);
	}
});



// Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  
  console.log(newReservation);

  reservations.push(newReservation);

  res.json(reservations);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




