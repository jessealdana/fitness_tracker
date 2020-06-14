const db = require("../models/modelIndex.js");
const express = require("express");
const app = express();

app.get("/exercise", (req, res) => {
    db.exercises.find({})
      .then(dbexercises => {
        res.json(dbexercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/workouts", (req, res) => {
    db.workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.post("/exercise", ({ body }, res) => {
    db.exercises.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/workouts/range", (req, res) => {
    db.workout.find({})
    .populate("exercises")
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });

  });
