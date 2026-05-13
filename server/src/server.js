// server js 

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

import authRoutes from './routes/auth.routes.js'
import onboardingRoutes from './routes/onboarding.routes.js'
import voteRoutes from './routes/vote.routes.js'

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/onboarding', onboardingRoutes)
app.use('/api/votes', voteRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})

const PORT = process.env.PORT || 3030

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})