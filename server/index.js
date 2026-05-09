const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const tripRoutes =
  require("./routes/tripRoutes");

const userRoutes =
  require("./routes/userRoutes");

require("dotenv").config();

const app = express();
const uploadRoutes =
  require("./routes/uploadRoutes");

app.use(cors());

app.use(express.json());

app.use("/api/trips", tripRoutes);
app.use("/api/upload", uploadRoutes);

app.use("/api/users", userRoutes);

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