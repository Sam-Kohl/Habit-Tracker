const mongoose = require('mongoose')

const HabitSchema = new mongoose.Schema({
  Habit: {
    type: String,
    required: true,
  },
  focused: {
    type: Boolean,
    required: true,
  },
  
  score: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Habit', HabitSchema)