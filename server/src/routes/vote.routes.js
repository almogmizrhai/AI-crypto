// vote routes js

import express from 'express'

import { Vote } from '../models/Vote.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        
        const { userId, sectionType, contentId, vote } = req.body
        
        if (!userId || !sectionType || !contentId || !vote) {
            return res.status(400).json({
                message: 'Missing vote data',
            })
        }
        
        const savedVote = await Vote.create({
            userId,
            sectionType,
            contentId,
            vote,
        })
        
        res.status(201).json({
            message: 'Vote saved successfully',
            vote: savedVote,
        })
    } catch (err) {
        console.log(err)
        
        res.status(500).json({
            message: 'Server error',
        })
    }
})

export default router
