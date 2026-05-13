// ai routes js

import express from 'express'
import axios from 'axios'

const router = express.Router()

router.post('/insight', async (req, res) => {
    try {
        const { assets, investorType } = req.body
        
        const prompt = `
        Give a short crypto market insight for a user interested in:
        ${assets.join(', ')}
        
        Investor type:
        ${investorType}
        Keep the response short and beginner friendly.
        `
        
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'openrouter/free',
                
                messages: [
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        )
        
        const insight =
        response.data.choices[0].message.content
        
        res.json({
            insight,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Failed to generate AI insight',
            error: err.response?.data || err.message,
        })
    }
})

export default router