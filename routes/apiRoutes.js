var db = req("./models");

app.get("/exercises", (req, res) => {
    db.exercises.find({})
      .then(dbexercises => {
        res.json(dbexercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/workout", (req, res) => {
    db.workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.post("/submit", ({ body }, res) => {
    db.exercises.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/populateduser", (req, res) => {
    db.workout.find({})
    .populate("exercises")
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });

  });