const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number
});

const exercises = mongoose.model("exercises", exercisesSchema);

module.exports = exercises;