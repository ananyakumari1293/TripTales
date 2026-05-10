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

      return res.status(200).json(existingUser);

    }
    console.log(
  "Creating user:",
  req.body
);

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
// UPDATE USER PROFILE
router.put(
  "/update/:firebaseUid",

  async (req, res) => {

    try {

      const user =
        await User.findOne({

          firebaseUid:
            req.params.firebaseUid,

        });

      if (!user) {

        return res.status(404).json({

          message:
            "User not found",

        });

      }

      user.username =
        req.body.username;

      user.bio =
        req.body.bio;

      user.profilePhoto =
        req.body.profilePhoto;

      await user.save();

      res.status(200).json(
        user
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Profile update failed",

      });

    }

  }
);

module.exports = router;