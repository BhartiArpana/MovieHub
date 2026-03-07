const identifyUser = require('../middleware/user.middleware')
const usersControllers = require('../controllers/users.controller')
const Router = require('express')
const router = Router()

// get /api/users
router.get('/',identifyUser,usersControllers.AllUsers)

// get /api/get-me
router.get('/get-me',identifyUser,usersControllers.getMe)

module.exports = router
