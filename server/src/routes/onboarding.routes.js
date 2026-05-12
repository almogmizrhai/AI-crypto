// onboarding routes js

import express from 'express'

import { User } from '../models/User.js'

const router = express.Router()

router.post('/:userId', async (req, res) => {
    try {
        const { userId } = req.params
        const { assets, investorType, contentTypes } = req.body
        
        if (!assets?.length || !investorType || !contentTypes?.length) {
            return res.status(400).json({
                message: 'All onboarding fields are required',
            })
        }
        
        const user = await User.findByIdAndUpdate(
            userId,
            {
                preferences: {
                    assets,
                    investorType,
                    contentTypes,
                },
                isOnboardingCompleted: true,
            }, 
            { new: true }
        ).select('-password')
        
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            })
        }
        
        res.json({
            message: 'Preferences saved successfully',
            user,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error',
        })
    }
})

export default router
