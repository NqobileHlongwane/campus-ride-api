const express = require("express");  //define http endpoints
const { getRides, addRide, updateRide } = require("../controllers/ridesController"); //imports 3 functions from controller file
const { body } = require("express-validator");

const router = express.Router();

// GET /rides (return list of rides)
router.get("/", getRides);  //group all rides endpoints

// POST /rides  (send ride request using studentId, pickup, dropoff)
router.post(
  "/",
  [
    body("studentId").isString().notEmpty(),  //checks that studentId is a non-empty string
    body("pickup").isString().notEmpty(),
    body("dropoff").isString().notEmpty(),
  ],
  addRide  //creates a new ride and return it
);

// PUT /rides/:id
router.put(
  "/:id",
  [body("status").isIn(["pending", "in-progress", "completed"])],
  updateRide  //updates the status of an existing ride by its ID
);

module.exports = router;  //exports the router to be used in app.js