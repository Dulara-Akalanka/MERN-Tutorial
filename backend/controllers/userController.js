const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d'}) // _id:_id, the payload
}
//login user

const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

//signup user
const signupUser = async (req, res) => {
    
    const {email, password} = req.body
//console.log(email, password)
    try{
        const user = await User.signup(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, signupUser}