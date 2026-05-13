// Vote Buttons cmp jsx

import { useState } from 'react'

import { useAuth } from '../context/AuthContext.jsx'
import { saveVote } from '../services/vote.service.js'
import { flashMsg } from '../services/util.service.js'

export function VoteButtons({ sectionType, contentId }) {
    const { user } = useAuth()
    const [selectedVote, setSelectedVote] = useState('')
    
    async function onVote(vote) {

        try {
            await saveVote({
                userId: user.id || user._id,
                sectionType,
                contentId,
                vote,
            })
            
            setSelectedVote(vote)
            
            flashMsg(
                vote === 'like'
                ? 'Thanks! Your like was saved '
                : 'Thanks! Your dislike was saved ',
            'success'
        )
    } catch (err) {
        console.log(err)
        flashMsg('Failed to save your vote ', 'error')
    }
}

return (

<div className="vote-buttons">
    <button type='button' className={selectedVote === 'like' ? 'selected' : ''} onClick={() => onVote('like')} > ❤️ </button>
    <button type='button' className={selectedVote === 'dislike' ? 'selected' : ''} onClick={() => onVote('dislike')} > 💔</button>
</div>
)
}