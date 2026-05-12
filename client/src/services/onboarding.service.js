// onboarding service js

import axios from 'axios'

const API_URL = 'http://localhost:3030/api/onboarding'

export async function savePreferences(userId, preferences) {
    const res = await axios.post(
        `${API_URL}/${userId}`,
        preferences
    )
    
    return res.data
}