// app service js

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

/******************************
 * USERS SERVICE 
 ******************************/

const USER_KEY = 'userDB'

var gUserFilterBy = {
    txt: '',
    minAge: 0
}

_createUsers()

export const userService = {
    query: queryUsers,
    get: getUser,
    remove: removeUser,
    save: saveUser,
    getEmptyUser,
    getNextUserId,
    getFilterBy: getUserFilterBy,
    setFilterBy: setUserFilterBy
}

function queryUsers() {
    return storageService.query(USER_KEY)
        .then(users => {
            if (gUserFilterBy.txt) {
                const regex = new RegExp(gUserFilterBy.txt, 'i')
                users = users.filter(user => regex.test(user.fullname))
            }

            if (gUserFilterBy.minAge) {
                users = users.filter(user => user.age >= gUserFilterBy.minAge)
            }

            return users
        })
}

function getUser(userId) {
    return storageService.get(USER_KEY, userId)
}

function removeUser(userId) {
    return storageService.remove(USER_KEY, userId)
}

function saveUser(user) {
    if (user.id) return storageService.put(USER_KEY, user)
    return storageService.post(USER_KEY, user)
}

function getEmptyUser(fullname = '', age = 0, email = '') {
    return {
        id: '',
        fullname,
        age,
        email
    }
}

function getUserFilterBy() {
    return { ...gUserFilterBy }
}

function setUserFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gUserFilterBy.txt = filterBy.txt
    if (filterBy.minAge !== undefined) gUserFilterBy.minAge = filterBy.minAge
    return gUserFilterBy
}

function getNextUserId(userId) {
    return storageService.query(USER_KEY)
        .then(users => {
            let idx = users.findIndex(u => u.id === userId) + 1
            if (idx >= users.length) idx = 0
            return users[idx].id
        })
}

function _createUsers() {
    let users = utilService.loadFromStorage(USER_KEY)
    if (!users || !users.length) {
        users = []
        users.push(_createUser('Alice Johnson', 25, 'alice@mail.com'))
        users.push(_createUser('Bob Smith', 32, 'bob@mail.com'))
        users.push(_createUser('Charlie Brown', 19, 'charlie@mail.com'))
        utilService.saveToStorage(USER_KEY, users)
    }
}

function _createUser(fullname, age, email) {
    return {
        id: utilService.makeId(),
        fullname,
        age,
        email
    }
}

/******************************
 * TASKS SERVICE 
 ******************************/

const TASK_KEY = 'taskDB'

var gTaskFilterBy = {
    txt: '',
    minPriority: 0
}

_createTasks()

export const taskService = {
    query: queryTasks,
    get: getTask,
    remove: removeTask,
    save: saveTask,
    getEmptyTask,
    getNextTaskId,
    getFilterBy: getTaskFilterBy,
    setFilterBy: setTaskFilterBy
}

function queryTasks() {
    return storageService.query(TASK_KEY)
        .then(tasks => {
            if (gTaskFilterBy.txt) {
                const regex = new RegExp(gTaskFilterBy.txt, 'i')
                tasks = tasks.filter(task => regex.test(task.title))
            }

            if (gTaskFilterBy.minPriority) {
                tasks = tasks.filter(task => task.priority >= gTaskFilterBy.minPriority)
            }

            return tasks
        })
}

function getTask(taskId) {
    return storageService.get(TASK_KEY, taskId)
}

function removeTask(taskId) {
    return storageService.remove(TASK_KEY, taskId)
}

function saveTask(task) {
    if (task.id) return storageService.put(TASK_KEY, task)
    return storageService.post(TASK_KEY, task)
}

function getEmptyTask(title = '', priority = 1, isDone = false) {
    return {
        id: '',
        title,
        priority,
        isDone
    }
}

function getTaskFilterBy() {
    return { ...gTaskFilterBy }
}

function setTaskFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gTaskFilterBy.txt = filterBy.txt
    if (filterBy.minPriority !== undefined) gTaskFilterBy.minPriority = filterBy.minPriority
    return gTaskFilterBy
}

function getNextTaskId(taskId) {
    return storageService.query(TASK_KEY)
        .then(tasks => {
            let idx = tasks.findIndex(t => t.id === taskId) + 1
            if (idx >= tasks.length) idx = 0
            return tasks[idx].id
        })
}

function _createTasks() {
    let tasks = utilService.loadFromStorage(TASK_KEY)
    if (!tasks || !tasks.length) {
        tasks = []
        tasks.push(_createTask('Buy groceries', 1, false))
        tasks.push(_createTask('Finish project', 3, false))
        tasks.push(_createTask('Call mom', 2, true))
        utilService.saveToStorage(TASK_KEY, tasks)
    }
}

function _createTask(title, priority, isDone) {
    return {
        id: utilService.makeId(),
        title,
        priority,
        isDone
    }
}
