const express = require('express')
const app = express()
const MongoClient = require('Mongodb').MongoClient
const PORT = 3000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'HabitTracker'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
    
    
    
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    })

    app.get('/',async (request, response)=>{
        // const todoItems = await db.collection('todos').find().toArray()
        // const itemsLeft = await db.collection('todos').countDocuments({completed: false})
        // response.render('index.ejs', { items: todoItems, left: itemsLeft })
        db.collection('habits').find().toArray()
        .then(data => {
            db.collection('habits').countDocuments()
            .then(itemsLeft => {
                response.render('index.ejs', { habits: data, left: itemsLeft })
            })
        })
        .catch(error => console.error(error))
    })


    app.post('/addHabit', (request, response) => {
        db.collection('habits').insertOne({name: request.body.habitItem, focused: false, score: 0})
        .then(result => {
            console.log('Habit Added')
            response.redirect('/')
        })
        .catch(error => console.error(error))
    })


    app.put('/makeFocused', (request, response) => {
        db.collection('habits').updateOne({name: request.body.habitFromJS},{
            $set: {
                focused: true
              }
        },{
            sort: {_id: -1},
            upsert: false
        })
        .then(result => {
            console.log('Habit now Focused')
            response.json('Habit now Focused')
        })
        .catch(error => console.error(error))
    
    })

    app.put('/unFocus', (request, response) => {
        db.collection('habits').updateOne({name: request.body.habitFromJS},{
            $set: {
                focused: false
              }
        },{
            sort: {_id: -1},
            upsert: false
        })
        .then(result => {
            console.log('Habit Unfocused')
            response.json('Habit Unfocused')
        })
        .catch(error => console.error(error))
    
    })


    app.delete('/deleteHabit', (request, response) => {
        db.collection('habits').deleteOne({name: request.body.habitFromJS})
        .then(result => {
            console.log('Habit Deleted')
            response.json('Habit Deleted')
        })
        .catch(error => console.error(error))
    
    })