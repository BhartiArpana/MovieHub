const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()



app.use(express.json())
app.use(cookieParser())


// AuthRouter
const authRouter = require('./routes/auth.routes')
const usersRouter = require('./routes/users.routes')

app.use('/api/auth',authRouter)
app.use('/api/users',usersRouter)

module.exports = app

