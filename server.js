const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const habitRoutes = require('./routes/habits')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB() // Connects to database using database.js in config folder

app.set('view engine', 'ejs') //Sets view engine to ejs
app.use(express.static('public')) //Accesses public folder for Client Side CSS / JS
app.use(express.urlencoded({ extended: true })) //Grabs body of inbound requests.
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
      })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', mainRoutes) //Sends requests with endpoint '/' to homeRoutes router
app.use('/habits', habitRoutes) //Sends requests with endpoint '/habits' to habitRoutes router


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
    })
 