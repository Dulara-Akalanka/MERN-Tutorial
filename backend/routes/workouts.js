const express = require('express')

const router = express.Router()

//GET all workouts
router.get('/', (req,res) => {
    res.json({mssg:"get all workouts"})
})

//GEt a single workout
router.get('/:id',(req,res) => {
    res.json({mssg:"get a single workout"})
})

//POST a new workout
router.post('/',(req,res) => {
    res.json({mssg:"post a new workout"})
})

//DELETE a workout
router.delete('/:id',(req,res) => {
    res.json({mssg:"delete a workout"})
})

//Update a  workout
router.patch('/:id',(req,res) => {
    res.json({mssg:"update a new workout"})
})

module.exports = router