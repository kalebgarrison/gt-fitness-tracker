const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of workout is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Your name is required",
      },
      duration: {
        type: Number,
        required: "Please enter duration time",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],

//   toJSON: {
//     virtuals: true,
//   },
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;