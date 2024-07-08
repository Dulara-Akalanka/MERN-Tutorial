const express = require('express') // need to make an instance of express router
const {
    loginUser, 
    signupUser
} = require('../controllers/userController')

const router = express.Router() // instance of express router

//login route
router.post('/login',  loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router