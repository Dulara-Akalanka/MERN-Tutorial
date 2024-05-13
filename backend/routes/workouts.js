const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GEt a single workout
router.get('/:id',getSingleWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//Update a  workout
router.patch('/:id',updateWorkout)

module.exports = router