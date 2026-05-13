// InsightSection cmp jsx

import { useEffect, useState } from 'react'

import { useAuth } from '../context/AuthContext.jsx'
import { getAiInsight } from '../services/dashboard.service.js'
import { VoteButtons } from './VoteButtons.jsx'


export function InsightSection() {
    const { user } = useAuth()
    const [insight, setInsight] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    async function loadInsight() {
        try {
            const data = await getAiInsight(user)
            setInsight(data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        loadInsight()
    }, [])
    
    if (isLoading){
        return <p>Loading AI insight...</p>
    } 
    
    return (
    <section className="insight-section dashboard-section">
        <h2>{insight.title}</h2>
        <div className="insight-card">
            <p>{insight.text}</p>
            <VoteButtons
                sectionType='insight'
                contentId={insight.id}
            />
        </div>
    </section>
    )
}