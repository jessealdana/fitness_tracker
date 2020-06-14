const db = require("../models/index.js");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    db.Exercises.find({})
      .then(dbExercises => {
        res.json(dbExercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.get("/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.post("/exercise", ({ body }, res) => {
    db.Exercises.create(body)
      .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Exercises: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
    .populate("Exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

  });

  module.exports = router;
