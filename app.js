const express = require("express");
const morgan = require("morgan");
const ridesRouter = require("./routes/rides");




const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("CampusRide API is running . Use /rides to interact.");
});

app.get("/", (req, res) => {
  res.json({
    message: " Welcome to CampusRide API",
    status: "Running",
    version: "1.0",
    endpoints: {
      listRides: {
        method: "GET",
        path: "/rides",
        description: "Fetch all ride requests"
      },
      createRide: {
        method: "POST",
        path: "/rides",
        description: "Submit a new ride request"
      },
      updateRideStatus: {
        method: "PUT",
        path: "/rides/:id",
        description: "Update ride status (pending, in-progress, completed)"
      }
    },
    usage: "Use Postman or any HTTP client to interact with these endpoints."
  });
});

// Routes
app.use("/rides", ridesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`CampusRide API running on http://localhost:${PORT}`);
});
