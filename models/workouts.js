const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: () => new Date() 
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type is required."
      },     
      name: {
        type: String,
        trim: true,
        required: "Exercise name is required."
      },
      duration: {
        type: Number,
        required: "Exercise duration is required."
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
    ]
  },
  {
    toJSON: {virtuals: true}
  }
  );

  WorkoutSchema.virtual("totalDuration").get( function() {
    let totalDuration = 0;
    for (let index = 0; index < this.exercises.length; index++) {
      const exercise = this.exercises[index];
      const thisDuration = exercise.duration;
      totalDuration += thisDuration;
    }
    console.log(totalDuration);
    return totalDuration;
  });
  

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;