// User js

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        
        preferences: {
            assets: {
                type: [String],
                default: [],
            },
            
            investorType: {
                type: String,
                default: '',
            },
            
            contentTypes: {
                type: [String],
                default: [],
            },
        },
        
        isOnboardingCompleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model('User', userSchema)