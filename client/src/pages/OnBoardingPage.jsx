// On Boarding Page jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext.jsx'

import { savePreferences } from '../services/onboarding.service.js'

import { flashMsg } from '../services/util.service.js'

export function OnBoardingPage() {
    const navigate = useNavigate()
    
    const { user, setUser } = useAuth()
    
    const [formData, setFormData] = useState({
        assets: [],
        investorType: '',
        contentTypes: [],
    })

    async function onSavePreferences(ev) {
        ev.preventDefault()
        
        try {
            const data = await savePreferences(
                user.id,
                formData
            )
            setUser(data.user)
            localStorage.setItem(
                'user',
                JSON.stringify(data.user)
            )
            
            flashMsg('Preferences saved successfully ','success')
            
            navigate('/dashboard')
        } catch (err) {
            console.log(err)
            flashMsg( 'Failed to save preferences ','error')
        }
    }
    
    function toggleArrayValue(field, value) {
        setFormData((prev) => {
            const exists = prev[field].includes(value)
            
            return {
                ...prev,
                [field]: exists
                ? prev[field].filter((item) => item !== value)
                : [...prev[field], value],
            }
        })
    }
    
    function setInvestorType(type) {
        setFormData((prev) => ({
            ...prev,
            investorType: type,
        }))
    }
    
    return (
    <div className="onboarding-page">
        <h1>Welcome to AI Crypto Advisor 🚀</h1>
        
        <form className="onboarding-form" onSubmit={onSavePreferences}>
            <h2>Select Crypto Assets</h2>
            
            <div className="options">
                {['BTC', 'ETH', 'SOL', 'DOGE'].map(
                    (asset) => (
                    <button type='button' key={asset} 
                    className={formData.assets.includes(asset)
                        ? 'option-btn selected'
                        : 'option-btn'
                        } onClick={() => toggleArrayValue( 'assets', asset)}>
                        {asset}
                    </button>
                    )
                )}
            </div>
            
            <h2>Select Investor Type</h2>
            
            <div className="options">
                {[
                    'HODLer',
                    'Day Trader',
                    'NFT Collector',
                ].map((type) => (
                <button type='button' key={type}  className={ formData.investorType === type
                    ? 'option-btn selected'
                    : 'option-btn'
                    } onClick={() => setInvestorType(type) }> 
                    {type}
                </button>
                ))}
            </div>
            
            <h2>Select Content Types</h2>
            
            <div className="options">
                {[
                    'Market News',
                    'Coin Prices',
                    'AI Insight',
                    'Fun Meme',
                ].map((content) => (
                    <button type='button' key={content} className={ formData.contentTypes.includes(content)
                        ? 'option-btn selected'
                        : 'option-btn'
                        } onClick={() =>toggleArrayValue( 'contentTypes', content) }>
                        {content}
                    </button>
                ))}
            </div>
            
            <button>
                Finish Onboarding
            </button>
        </form>
    </div>
    )
}