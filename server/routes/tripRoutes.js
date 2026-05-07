const express = require("express");

const router = express.Router();

const Trip = require("../models/Trip");


// GET all trips
router.get("/", async (req, res) => {

  try {

    const trips = await Trip.find();

    res.json(trips);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// CREATE trip
router.post("/", async (req, res) => {

  try {

    const newTrip = new Trip(req.body);

    const savedTrip =
      await newTrip.save();

    res.status(201).json(savedTrip);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});
// DELETE trip
router.delete("/:id", async (req, res) => {

  try {

    await Trip.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Trip deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;