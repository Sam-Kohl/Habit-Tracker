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
    element.addEventListener('click', makeFocused)
})

Array.from(habitFocused).forEach((element)=>{
    element.addEventListener('click', unFocus)
})

async function deleteHabit(){
    const habitText = this.parentNode.childNodes[1].innerText || this.parentNode.childNodes[3].innerText // Gets inner text from span regardless of focused or not
    try{
        const response = await fetch('deleteHabit', { //Sends delete request via web api
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'habitFromJS': habitText // Grabs innertext of span to pass to server
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload() //Reloads page on promise settlement

    }catch(err){
        console.log(err)
    }
}


async function makeFocused(){
    const habitText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('makeFocused', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitFromJS': habitText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function unFocus(){
    const habitText = this.parentNode.childNodes[3].innerText
    console.log(`habit text: ${habitText}`)
    try{
        const response = await fetch('unFocus', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitFromJS': habitText
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
    const habitText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('scoreUp', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitFromJS': habitText
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
    const habitText = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('scoreDown', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'habitFromJS': habitText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}