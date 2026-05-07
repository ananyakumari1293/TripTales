const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  destination: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  budget: {
    type: Number,
    required: true,
  },

  displayBudget: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  overview: {
    type: String,
    default: "",
  },

  day1: {
    type: String,
    default: "",
  },

  day2: {
    type: String,
    default: "",
  },

  day3: {
    type: String,
    default: "",
  },

  dos: {
    type: [String],
    default: [],
  },

  donts: {
    type: [String],
    default: [],
  },

}, {
  timestamps: true,
});

module.exports =
  mongoose.model("Trip", tripSchema);