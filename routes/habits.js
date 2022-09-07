const express = require('express')
const router = express.Router()
const habitController = require('../controllers/habits')

router.get('/', habitController.getHabits) //Passes Get requests to /habits/ to controller

router.post('/createHabit', habitController.createHabit) //Passes Post requests to /habits/createHabit to controller

router.put('/focusHabit', habitController.focusHabit)

router.put('/unfocusHabit', habitController.unfocusHabit)

router.put('/scoreUp', habitController.scoreUp)

router.put('/scoreDown', habitController.scoreDown)

router.delete('/deleteHabit', habitController.deleteHabit)

module.exports = router