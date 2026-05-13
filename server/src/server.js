// server js 

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

import { connectDB } from './config/db.js'

import authRoutes from './routes/auth.routes.js'
import onboardingRoutes from './routes/onboarding.routes.js'
import voteRoutes from './routes/vote.routes.js'
import aiRoutes from './routes/ai.routes.js'

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/onboarding', onboardingRoutes)
app.use('/api/votes', voteRoutes)
app.use('/api/ai', aiRoutes)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const clientDistPath = path.join(__dirname, '../../client/dist')

app.use(express.static(clientDistPath))

app.use((req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'))
})

const PORT = process.env.PORT || 3030

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})

