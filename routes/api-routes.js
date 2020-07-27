const path = require("path");
const db = require("../models/index");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find()
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
      console.log(db.Workout)
    db.Workout.create({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    const id = req.params.id;
    const data = req.body

    db.Workout.updateOne({_id: id}, {$push: {exercises: [{
        type: data.type, 
        name: data.name, 
        duration: data.duration,
        weight: data.weight, 
        reps: data.reps, 
        sets: data.sets,
        distance: data.distance
    }], 
    $inc: {totalDuration: data.totalDuration}
}})
.then(function (dbUpdateOne){
    res.json(dbUpdateOne);
})
.catch(function (err){
    res.json(err);
})
  });

  app.get("/api/workouts/range", function (req, res){
      db.Workout.find({})
      .then(function (dbWorkout){
          res.json(dbWorkout);
      })
      .catch(function (err){
          res.json(err);
      })
  })
};
