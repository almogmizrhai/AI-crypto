// dashboard service js

import axios from 'axios'

export async function getCoinPrices(coins) {
    try {
        const idsMap = {
            BTC: 'bitcoin',
            ETH: 'ethereum',
            SOL: 'solana',
            DOGE: 'dogecoin',
        }
        
        const coinIds = coins
        .map((coin) => idsMap[coin])
        .join(',')
        
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets`,
            {
                params: {
                    vs_currency: 'usd',
                    ids: coinIds,
                },
            }
        )
        
        return res.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function getCryptoNews(assets = []) {
    const fallbackNews = [
        {
            id: 'news-1',
            title: 'Bitcoin market shows renewed investor interest',
            source: 'Crypto Daily',
            asset: 'BTC',
            url: '#',
        },
        
        {
            id: 'news-2',
            title: 'Ethereum developers discuss future scaling improvements',
            source: 'Blockchain News',
            asset: 'ETH',
            url: '#',
        },
        
        {
            id: 'news-3',title: 'Solana ecosystem continues to grow with new apps',
            source: 'Web3 Updates',
            asset: 'SOL',
            url: '#',
        },
        
        {
            id: 'news-4',
            title: 'Dogecoin community activity rises again',
            source: 'Meme Coin Watch',
            asset: 'DOGE',
            url: '#',
        },
    ]
    
    if (!assets.length) return fallbackNews
    
    return fallbackNews.filter((news) =>
        assets.includes(news.asset)
)
}

export async function getAiInsight(user) {
    const assets = user?.preferences?.assets?.join(', ') || 'crypto'
    
    return {
        id: 'insight-1',
        title: 'AI Insight of the Day',
        text: `Based on your interest in ${assets}, today's market looks mixed. Keep tracking price changes, news sentiment, and long-term trends before making decisions.`,
    }
}

export async function getCryptoMeme() {
    const memes = [
        {
            id: 'meme-1',
            title: 'When you buy the dip and it keeps dipping',
            imageUrl:
            'https://i.imgflip.com/4/1bij.jpg',
        },
        {
            id: 'meme-2',
            title: 'Crypto investors checking prices every 5 minutes',
            imageUrl:
            'https://i.imgflip.com/30b1gx.jpg',
        },
    ]
  return memes[Math.floor(Math.random() * memes.length)]
}

export async function saveVote(voteData) {
    const res = await axios.post(
        'http://localhost:3030/api/votes',
        voteData
    )
    
    return res.data
}