const path = require("path");
const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res){
        db.Workout.find()
        .then(function (dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function (err){
            res.json(err)
        });

    });

    app.post("/api/workouts", function (req, res){
        db.Workout.insert()
        .then(function (dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function (err) {
            res.json(err)
        });
    });

    
}