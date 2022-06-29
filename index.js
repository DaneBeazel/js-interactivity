console.log('hello world')

// Grab element

let message = document.querySelector('#message')


//Function
function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    
}

document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie (event) {
    event.target.parentNode.remove(event)
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
}

function revealMessage () {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
