// db js 

import mongoose from 'mongoose'

export async function connectDB() {
    
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB  is connected successfully')
    
    } catch (err) {
        console.log('MongoDB connection failed')
        console.log(err)
        process.exit(1)
    }
}