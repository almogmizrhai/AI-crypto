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
export function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

// make rendome sentence
export function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

// save from storage 
export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
// load from storage 
export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

export function padNum(num) {
    return (num + '').padStart(2, '0')
}

// Date - day and year
export function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}
// Date - day and year
export function getMonthName(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[date.getMonth()]
}

//calculate age
export function _calculateAge(dateStr) {
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
export function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

//A function that receives a number of rows and a number of columns and accordingly creates a matrix with random numbers. 
export function generateMat(rows, cols) {
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
export function findEmptyPos() {
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
export function copyBoard(board){
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
export function flashMsg(msg, type = 'success') {
    var elUserMsg = document.querySelector('.user-msg')
    elUserMsg.innerText = msg
    elUserMsg.className = `user-msg ${type}`
    elUserMsg.hidden = false
    setTimeout(() => {
        elUserMsg.hidden = true
    }, 2250)
}

// Random color picker
export function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// Timer start function
export function startTimer(){
    gStartTime = Date.now()
    gTimerInterval = setInterval(() => {
        var diff = (Date.now() - gStartTime) / 1000
        updateGameInfo(diff) 
    }, 100)
}
// Timer stop function
export function stopTimer(){
    clearInterval(gTimerInterval)
}

// Element hiding function
export function hideElement(selector) {
    var el = document.querySelector(selector)
    el.classList.add('hide')
}

// Function to display an element
export function showElement(selector) {
    var el = document.querySelector(selector)
    el.classList.remove('hide')
}

//Function to play Sound
export function playSound(){
    const audio = new Audio ('ball-board/sound/collect-points-190037.mp3')
    audio.play()
}