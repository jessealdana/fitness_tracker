const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "exercises"
      }
    ]
  });

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;