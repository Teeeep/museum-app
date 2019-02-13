function capitalizeFirstChar(name) {

    
    let firstLetter = name.charAt(0).toUpperCase() 
    console.log(firstLetter)
    return firstLetter + name.slice(1)
}

function doesNotPassAllValidations (name, msg) {
    if (!name) {
        alert('You forgot to fill in your name!')
        return true
    }

    if (!msg) {
        alert('You forgot to enter your message!')
        return true

    }
    if (msg.length > 280) {
        alert('Your comment is too long')
        return true
    }
    return false
}

// eventhandler
function submitComment() {

    // data gathering
    const inputField = document.getElementById('name')
    let name = inputField.value 
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    if (doesNotPassAllValidations(name, msg)) {
        return null
    }

    name = capitalizeFirstChar(name)

    // create elements
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // adjust elememts
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    // display elements
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)


    // reset values
    inputField.value = null
    textArea.value = null

    
} 



