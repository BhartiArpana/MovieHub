const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')


// for adming register 
// post /api/auth/adminRegister
router.post('/adminRegister',authController.adminRegister)

//  for admin login 
// post /api/auth/aminLogin
router.post('/adminLogin',authController.adminLogin)

// for register user 
// @route /api/auth/register
router.post('/register',authController.registerUser)

// for login user
// @route /api/auth/login
router.post('/login',authController.LoginUser)



// for logout
// @route /api/auth/logout
// router.get('/logout',authController.logout)

module.exports = router