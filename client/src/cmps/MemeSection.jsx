// MemeSection cmp jsx

import { useEffect, useState } from 'react'

import { getCryptoMeme } from '../services/dashboard.service.js'
import { VoteButtons } from './VoteButtons.jsx'


export function MemeSection() {
    const [meme, setMeme] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    async function loadMeme() {
        try {
            const data = await getCryptoMeme()
            setMeme(data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        loadMeme()
    }, [])
    
    if (isLoading) return <p>Loading meme...</p>

    return (
    <section className="meme-section dashboard-section">
        <h2>Fun Crypto Meme 😂</h2>
        <div className="meme-card">
            <p>{meme.title}</p>
            <img src={meme.imageUrl} alt={meme.title} />
        </div>
        <VoteButtons
            sectionType='meme'
            contentId={meme.id}
        />
    </section>
    )
}