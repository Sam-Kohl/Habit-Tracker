const Habit = require('../models/habits')


module.exports = {
    getHabits: async (req,res)=>{
        try{
            const habitItems = await Habit.find()
            const habitsLeft = await Habit.countDocuments()
            res.render('habits.ejs', {habits: habitItems, left: habitsLeft})
        }catch(err){
            console.log(err)
        }
    },

    createHabit: async (req,res)=>{
        try{
            await Habit.create({Habit: req.body.habitItem, focused: false, score: 0})
            console.log('Habit has been added!')
            res.redirect('/habits')
        }catch(err){
            console.log(err)
        }
    },

    deleteHabit: async (req, res)=>{
        console.log(req.body.habitIdFromJSFile)
        try{
            await Habit.findOneAndDelete({_id:req.body.habitIdFromJS})
            console.log('Deleted Habit')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },

    focusHabit: async (req, res)=>{
        try{
            await Habit.findOneAndUpdate({_id:req.body.habitIdFromJS},{
                focused: true
            })
            console.log(`Habit ${req.body.habitIdFromJS} focused`)
            res.json(`Habit ${req.body.habitIdFromJS} focused`)
        }catch(err){
            console.log(err)
        }
    },

    unfocusHabit: async (req, res)=>{
        try{
            await Habit.findOneAndUpdate({_id:req.body.habitIdFromJS},{
                focused: false
            })
            console.log(`Habit ${req.body.habitIdFromJS} unfocused`)
            res.json(`Habit ${req.body.habitIdFromJS} unfocused`)
        }catch(err){
            console.log(err)
        }
    },

    scoreUp: async (req,res)=>{
        try{
            await Habit.findOneAndUpdate({_id:req.body.habitIdFromJS},{
                $inc: {score: 1}
            })
            console.log(`Habit ${req.body.habitIdFromJS} score raised`)
            res.json(`Habit ${req.body.habitIdFromJS} score raised`)
        }catch(err){
            console.log(err)
            }
    },

    scoreDown: async (req,res)=>{
        try{
            await Habit.findOneAndUpdate({_id:req.body.habitIdFromJS},{
                $inc: {score: -1}
            })
            console.log(`Habit ${req.body.habitIdFromJS} score lowered`)
            res.json(`Habit ${req.body.habitIdFromJS} score lowered`)
        }catch(err){
            console.log(err)
            }
    }
}

// app.get('/',async (request, response)=>{
//     // const todoItems = await db.collection('todos').find().toArray()
//     // const itemsLeft = await db.collection('todos').countDocuments({completed: false})
//     // response.render('index.ejs', { items: todoItems, left: itemsLeft })
//     db.collection('habits').find().toArray()
//     .then(data => {
//         db.collection('habits').countDocuments()
//         .then(itemsLeft => {
//             response.render('index.ejs', { habits: data, left: itemsLeft })
//         })
//     })
//     .catch(error => console.error(error))
// })


// app.post('/addHabit', (request, response) => {
//     db.collection('habits').insertOne({name: request.body.habitItem, focused: false, score: 0})
//     .then(result => {
//         console.log('Habit Added')
//         response.redirect('/')
//     })
//     .catch(error => console.error(error))
// })


// app.put('/makeFocused', (request, response) => {
//     db.collection('habits').updateOne({name: request.body.habitFromJS},{
//         $set: {
//             focused: true
//           }
//     },{
//         sort: {_id: -1},
//         upsert: false
//     })
//     .then(result => {
//         console.log('Habit now Focused')
//         response.json('Habit now Focused')
//     })
//     .catch(error => console.error(error))

// })

// app.put('/unFocus', (request, response) => {
//     db.collection('habits').updateOne({name: request.body.habitFromJS},{
//         $set: {
//             focused: false
//           }
//     },{
//         sort: {_id: -1},
//         upsert: false
//     })
//     .then(result => {
//         console.log('Habit Unfocused')
//         response.json('Habit Unfocused')
//     })
//     .catch(error => console.error(error))

// })


// app.put('/scoreUp', (request, response) => {
//     db.collection('habits').updateOne({name: request.body.habitFromJS},{
//         $inc: {
//             score: 1
//           }
//     },{
//         sort: {_id: -1},
//         upsert: false
//     })
//     .then(result => {
//         console.log('Score raised by 1')
//         response.json('Score raised by 1')
//     })
//     .catch(error => console.error(error))

// })

// app.put('/scoreDown', (request, response) => {
//     db.collection('habits').updateOne({name: request.body.habitFromJS},{
//         $inc: {
//             score: -1
//           }
//     },{
//         sort: {_id: -1},
//         upsert: false
//     })
//     .then(result => {
//         console.log('Score Lowered by 1')
//         response.json('Score Lowered by 1')
//     })
//     .catch(error => console.error(error))

// })


// app.delete('/deleteHabit', (request, response) => {
//     db.collection('habits').deleteOne({name: request.body.habitFromJS})
//     .then(result => {
//         console.log('Habit Deleted')
//         response.json('Habit Deleted')
//     })
//     .catch(error => console.error(error))

// })