// vote service js

import axios from 'axios'

const API_URL = 'http://localhost:3030/api/votes'

export async function saveVote(voteData) {
    const res = await axios.post(API_URL, voteData)
    
    return res.data
}