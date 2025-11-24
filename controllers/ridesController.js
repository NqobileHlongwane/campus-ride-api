const {validationResult} = require("express-validator");

let rides = []; // In-memory array to store rides
let rideIdCounter = 1; // Simple counter to assign unique IDs 

// GET /rides - Retrieve all rides
function getRides (req, res) {
  res.json(rides);
};

// POST /rides - Add a new ride
function addRide  (req, res)  {  //js functions to handle requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { studentId, pickup, dropoff } = req.body;
    const newRide = {
        id: rideIdCounter++,
        studentId,
        pickup,
        dropoff,        
        status: "pending",
    };
    rides.push(newRide);
    res.status(201).json(newRide);
}
// PUT /rides/:id - Update ride status
function updateRide (req, res)  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const rideId = parseInt(req.params.id, 10);
    const { status } = req.body;  //read the status from request body
    const ride = rides.find(r => r.id === rideId);
    if (!ride) {
        return res.status(404).json({ error: "Ride not found" });
    }
    ride.status = status;
    res.json(ride);
}

module.exports = { //lis of rides, new rides, rides updates are exported from the
    getRides,
    addRide,
    updateRide
};

