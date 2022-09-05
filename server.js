const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const habitRoutes = require('./routes/habits')

require('dotenv').config({path: './config/.env'})

connectDB() // Connects to database using database.js in config folder

app.set('view engine', 'ejs') //Sets view engine to ejs
app.use(express.static('public')) //Accesses public folder for Client Side CSS / JS
app.use(express.urlencoded({ extended: true })) //Grabs body of inbound requests.
app.use(express.json())
    
    
app.use('/', homeRoutes) //Sends requests with endpoint '/' to homeRoutes router
app.use('/habits', habitRoutes) //Sends requests with endpoint '/habits' to habitRoutes router


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
    })
 