const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GEt a single workout
router.get('/:id',getSingleWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',(req,res) => {
    res.json({mssg:"delete a workout"})
})

//Update a  workout
router.patch('/:id',(req,res) => {
    res.json({mssg:"update a new workout"})
})

module.exports = router