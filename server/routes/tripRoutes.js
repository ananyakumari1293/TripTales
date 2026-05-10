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
router.put(
  "/archive/:id",

  async (req, res) => {

    try {

      const trip =
        await Trip.findById(
          req.params.id
        );

      if (!trip) {

        return res.status(404).json({

          message:
            "Trip not found",

        });

      }

      trip.isArchived =
        !trip.isArchived;

      await trip.save();

      res.status(200).json({

        message:
          trip.isArchived

            ? "Trip archived"

            : "Trip restored",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Archive failed",

      });

    }

  }
);
router.put(
  "/edit/:id",

  async (req, res) => {

    try {

      const updatedTrip =
        await Trip.findByIdAndUpdate(

          req.params.id,

          req.body,

          {
            new: true,
          }

        );

      res.status(200).json(
        updatedTrip
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Edit failed",

      });

    }

  }
);
router.put(
  "/like/:id",

  async (req, res) => {

    try {

      const trip =
        await Trip.findById(
          req.params.id
        );

      const { userId } =
        req.body;

      if (!trip) {

        return res
          .status(404)
          .json({
            message:
              "Trip not found",
          });

      }

      const alreadyLiked =
        trip.likes.includes(
          userId
        );

      if (alreadyLiked) {

        trip.likes =
          trip.likes.filter(
            (id) =>
              id !== userId
          );

      } else {

        trip.likes.push(
          userId
        );

      }

      await trip.save();

      res.status(200).json({

        likes:
          trip.likes,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Like Failed",

      });

    }

  }
);
router.put(
  "/save/:id",

  async (req, res) => {

    try {

      const trip =
        await Trip.findById(
          req.params.id
        );

      const { userId } =
        req.body;

      if (!trip) {

        return res
          .status(404)
          .json({
            message:
              "Trip not found",
          });

      }

      const alreadySaved =
        trip.savedBy.includes(
          userId
        );

      if (alreadySaved) {

        trip.savedBy =
          trip.savedBy.filter(
            (id) =>
              id !== userId
          );

      } else {

        trip.savedBy.push(
          userId
        );

      }

      await trip.save();

      res.status(200).json({

        savedBy:
          trip.savedBy,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Save Failed",

      });

    }

  }
);
router.post(
  "/comment/:id",

  async (req, res) => {

    try {

      const trip =
        await Trip.findById(
          req.params.id
        );

      if (!trip) {

        return res
          .status(404)
          .json({

            message:
              "Trip not found",

          });

      }

      const newComment = {

        userId:
          req.body.userId,

        userName:
          req.body.userName,

        userPhoto:
          req.body.userPhoto,

        text:
          req.body.text,

      };

      trip.comments.push(
        newComment
      );

      await trip.save();

      res.status(200).json({

        comments:
          trip.comments,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Comment Failed",

      });

    }

  }
);

module.exports = router;