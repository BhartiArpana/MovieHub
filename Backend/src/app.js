const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'
    }
))


// AuthRouter
const authRouter = require('./routes/auth.routes')
const usersRouter = require('./routes/users.routes')

app.use('/api/auth',authRouter)
app.use('/api/users',usersRouter)

module.exports = app

