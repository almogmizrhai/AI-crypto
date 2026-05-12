// CoinSection cmp jsx

import { useEffect, useState } from 'react'

import { useAuth } from '../context/AuthContext'

import { getCoinPrices } from '../services/dashboard.service'

export function CoinSection() {
    const { user } = useAuth()
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        loadCoins()
    }, [])
    
    async function loadCoins() {
        try {
            const data = await getCoinPrices(
                user.preferences.assets
            )
            
            setCoins(data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    
    if (isLoading) {
        return <p>Loading coin prices...</p>
    }
    
    return (
    <section className="coin-section dashboard-section">
        <h2>Coin Prices</h2>
        
        <div className="coin-grid grid">
            {coins.map((coin) => (
                <div className='dashboard-card' key={coin.id}>
                    <h3> {coin.name} ({coin.symbol.toUpperCase()}) </h3>
                    <p> 💰 ${coin.current_price} </p>
                    
                    <p> 
                        📈 24h:
                        {' '} 
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                    </p>
                    
                    <img src={coin.image} width='50'/>
                </div>
            ))}
        </div>
    </section>
    )
}