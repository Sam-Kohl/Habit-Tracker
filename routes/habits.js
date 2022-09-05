const express = require('express')
const router = express.Router()
const habitController = require('../controllers/habits')

router.get('/', habitController.getHabits)

router.post('/createTodo', habitController.createHabits)

router.put('/markComplete', habitController.markComplete)

router.put('/markIncomplete', habitController.markIncomplete)

router.delete('/deleteTodo', habitController.deleteHabit)

module.exports = router