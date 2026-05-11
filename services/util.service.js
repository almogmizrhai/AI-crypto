// util service js

export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    loadFromStorage,
    saveToStorage,
    padNum,
    getDayName,
    getMonthName,
    _calculateAge,
    getRandomIntInclusive,
    generateMat,
    findEmptyPos,
    copyBoard,
    flashMsg,
    getRandomColor,
    startTimer,
    stopTimer,
    hideElement,
    showElement,
    playSound,
}

// make rendome id
function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

// make rendome sentence
function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

// save from storage 
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
// load from storage 
function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function padNum(num) {
    return (num + '').padStart(2, '0')
}

// Date - day and year
function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}
// Date - day and year
function getMonthName(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[date.getMonth()]
}

//calculate age
function _calculateAge(dateStr) {
    const today = new Date()
    const birthDate = new Date(dateStr)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age
}

// generate a random integer between min and up to, but not including, max
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

//A function that receives a number of rows and a number of columns and accordingly creates a matrix with random numbers. 
function generateMat(rows, cols) {
	const mat = []

	for (var i = 0; i < rows; i++) {
		mat[i] = []

		for (var j = 0; j < cols; j++) {
			mat[i][j] = getRandomInt(1, 100)
		}
	}

	return mat
}

//Function to find Empty Pos on board
function findEmptyPos() {
    var emptyPoss = [] // [{i:0,j:0},{i:0,j:1}]

    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            var cell = gBoard[i][j]
            // console.log('cell:', cell)
            if (cell === '') {
                var pos = { i: i, j: j }
                // console.log('pos:', pos)s
                emptyPoss.push(pos)
            }
        }
    }

    if (!emptyPoss.length) return null
    // console.log('emptyPoss:', emptyPoss)
    var randIdx = getRandomInt(0, emptyPoss.length) // 3
    // console.log('randIdx:', randIdx)
    var emptyPos = emptyPoss[randIdx] // {i:1,j:2}
    // console.log('emptyPos:', emptyPos)
    return emptyPos
}

// copy board
function copyBoard(board){
    const copyBoard = []
    for(var i=0; i<board.length; i++){
        copyBoard[i] = []
        for(var j=0; j<board[0].length; j++){
            copyBoard[i][j] = board [i][j]
        }
    }
    return copyBoard
}

// Display a customized message on the screen.s
function flashMsg(msg) {
    var elUserMsg = document.querySelector('.user-msg')
    elUserMsg.innerText = msg
    elUserMsg.hidden = false
    setTimeout(() => {
        elUserMsg.hidden = true
    }, 2250)
}

// Random color picker
function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// Timer start function
function startTimer(){
    gStartTime = Date.now()
    gTimerInterval = setInterval(() => {
        var diff = (Date.now() - gStartTime) / 1000
        updateGameInfo(diff) 
    }, 100)
}
// Timer stop function
function stopTimer(){
    clearInterval(gTimerInterval)
}

// Element hiding function
function hideElement(selector) {
    var el = document.querySelector(selector)
    el.classList.add('hide')
}

// Function to display an element
function showElement(selector) {
    var el = document.querySelector(selector)
    el.classList.remove('hide')
}

//Function to play Sound
function playSound(){
    const audio = new Audio ('ball-board/sound/collect-points-190037.mp3')
    audio.play()
}