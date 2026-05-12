// auth routes js

import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../models/User.js'

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Name, email and password are required',
            })
        }
        
        if (password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters',
            })
        }
        
        const existingUser = await User.findOne({ email })
        
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists',
            })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )
        
        res.status(201).json({
            message: 'User created successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isOnboardingCompleted: user.isOnboardingCompleted,
            },
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error',
        })
    }
})

export default router
