const express = require("express");
const morgan = require("morgan");
const ridesRouter = require("./routes/rides");




const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));



// Routes
app.use("/rides", ridesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`CampusRide API running on http://localhost:${PORT}`);
});