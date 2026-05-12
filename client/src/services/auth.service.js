// auth service js

import axios from 'axios'

const API_URL = 'http://localhost:3030/api/auth'

export async function signup(userData) {
    const res = await axios.post(
        `${API_URL}/signup`,
        userData
    )
    
    return res.data
}

export async function login(userData) {
    const res = await axios.post(
        `${API_URL}/login`,
        userData
    )
    
    return res.data
}