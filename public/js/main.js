const deleteBtn = document.querySelectorAll('.fa-trash')
const habitUnfocused = document.querySelectorAll('.habit span') 
const habitFocused = document.querySelectorAll('.habit span.focused') 


Array.from(deleteBtn).forEach((element)=>{ // Puts every deleteBtn in array
    element.addEventListener('click', deleteHabit) // Puts click listener on every deleteBtn
})



async function deleteHabit(){
    const habitText = this.parentNode.childNodes[3].innerText
    console.log(`habit Text: ${habitText}`)
    try{
        const response = await fetch('deleteHabit', {
            method: 'delete',
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