const express = require("express");

const multer = require("multer");

const cloudinary =
  require("../config/cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");

const router = express.Router();

const storage =
  new CloudinaryStorage({

    cloudinary,

    params: {

      folder: "TripTales",

      allowed_formats: [
        "jpg",
        "png",
        "jpeg",
        "webp",
      ],

    },

  });

const upload =
  multer({ storage });

router.post(
  "/",
  upload.single("image"),

  async (req, res) => {

    try {

      res.status(200).json({

        imageUrl:
          req.file.path,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Upload Failed",

      });

    }

  }
);

module.exports = router;
