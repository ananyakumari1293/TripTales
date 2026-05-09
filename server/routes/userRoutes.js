const express = require("express");

const router = express.Router();

const User =
  require("../models/User");


// CREATE USER
router.post("/", async (req, res) => {

  try {

    const existingUser =
      await User.findOne({
        firebaseUid:
          req.body.firebaseUid,
      });

    if (existingUser) {

      return res.json(existingUser);

    }

    const user =
      new User(req.body);

    const savedUser =
      await user.save();

    res.status(201).json(
      savedUser
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// GET USER BY FIREBASE UID
router.get(
  "/:firebaseUid",
  async (req, res) => {

    try {

      const user =
        await User.findOne({
          firebaseUid:
            req.params.firebaseUid,
        });

      res.json(user);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

module.exports = router;