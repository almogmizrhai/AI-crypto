// vote js 

import mongoose from 'mongoose'

const voteSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        
        sectionType: {
            type: String,
            required: true,
        },
        
        contentId: {
            type: String,
            required: true,
        },

        vote: {
            type: String,
            enum: ['like', 'dislike'],
            required: true,
        },
    },
    
    {
        timestamps: true,
    }
)

export const Vote = mongoose.model('Vote', voteSchema)
