const deleteBtn = document.querySelectorAll('.fa-trash') // Stores all trash Icons in variable
const thumbsUpBtn = document.querySelectorAll('.fa-thumbs-up')
const thumbsDownBtn = document.querySelectorAll('.fa-thumbs-down')
const habitUnfocused = document.querySelectorAll('.habit span.unFocused') 
const habitFocused = document.querySelectorAll('.habit span.focused') 



Array.from(deleteBtn).forEach((element)=>{ // Puts every deleteBtn in array
    element.addEventListener('click', deleteHabit) // Puts click listener on every deleteBtn
})

Array.from(thumbsUpBtn).forEach((element)=>{ 
    element.addEventListener('click', scoreUp) 
})

Array.from(thumbsDownBtn).forEach((element)=>{ 
    element.addEventListener('click', scoreDown) 
})


Array.from(habitUnfocused).forEach((element)=>{
    element.addEventListener('click', focusHabit)
})

Array.from(habitFocused).forEach((element)=>{
    element.addEventListener('click', unfocusHabit)
})

async function deleteHabit(){
    const habitId = this.parentNode.dataset.id // Gets data-id assigned by database from parent element 
    console.log(`habitID is: ${habitId}`)
    try{
        const response = await fetch('habits/deleteHabit', { //Sends delete request via web api
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'habitIdFromJS': habitId // Grabs id of span to pass to server
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload() //Reloads page on promise settlement

    }catch(err){
        console.log(err)
    }
}


async function focusHabit(){
    const habitId = this.parentNode.dataset.id
    try{
        const response = await fetch('habits/focusHabit', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitIdFromJS': habitId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function unfocusHabit(){
    const habitId = this.parentNode.dataset.id
    console.log(`${habitId}`)
    try{
        const response = await fetch('habits/unfocusHabit', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitIdFromJS': habitId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function scoreUp(){
    const habitId = this.parentNode.dataset.id
    try{
        const response = await fetch('habits/scoreUp', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitIdFromJS': habitId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function scoreDown(){
    const habitId = this.parentNode.dataset.id
    try{
        const response = await fetch('habits/scoreDown', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitIdFromJS': habitId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}