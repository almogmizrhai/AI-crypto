// News Section cmp jsx

import { useEffect, useState } from 'react'

import { useAuth } from '../context/AuthContext.jsx'
import { getCryptoNews } from '../services/dashboard.service.js'

export function NewsSection() {
    const { user } = useAuth()
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        loadNews()
    }, [])
    
    async function loadNews() {
        try {
            const data = await getCryptoNews(
                user.preferences.assets
            )
            setNews(data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    
    if (isLoading) {
        return <p>Loading crypto news...</p>
    }
    
    return (
    <section className="news-section dashboard-section">
        <h2>Market News</h2>
        
        <div className="news-list">
            {news.map((item) => (
                <article className="news-card" key={item.id}>
                    <h3>{item.title}</h3>
                    <p> {item.source} · {item.asset} </p>
                    <a href={item.url}>Read more</a>
                </article>
            ))}
        </div>
    </section>
    )
}