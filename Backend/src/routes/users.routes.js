const identifyUser = require('../middleware/user.middleware')
const usersControllers = require('../controllers/users.controller')
const Router = require('express')
const router = Router()

// get /api/users
router.get('/',identifyUser,usersControllers.AllUsers)

// get /api/get-me
router.get('/get-me',identifyUser,usersControllers.getMe)

// POST /api/users/favorites - add favorite
router.post('/favorites/add',identifyUser,usersControllers.addFavorite)

// DELETE /api/users/favorites - remove favorite
router.delete('/favorites/remove',identifyUser,usersControllers.removeFavorite)

// GET /api/users/favorites - get all favorites
router.get('/favorites',identifyUser,usersControllers.getFavorites)

module.exports = router
