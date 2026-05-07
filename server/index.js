const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const tripRoutes =
  require("./routes/tripRoutes");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/trips", tripRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected 🔥");

  })
  .catch((error) => {

    console.log(error);

  });

app.get("/", (req, res) => {

  res.send("TripTales Backend Running 🚀");

});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});