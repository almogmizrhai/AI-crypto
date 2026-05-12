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