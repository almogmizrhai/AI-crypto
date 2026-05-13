// home cmp jsx

import { Link } from 'react-router-dom'

import { useAuth } from '../context/AuthContext.jsx'
// import { OnBoardingPage } from './pages/OnBoardingPage.jsx'

export function Home() {
    const { user } = useAuth()

    const assets = user?.preferences?.assets || []
    const investorType = user?.preferences?.investorType || 'Not selected yet'
    const contentTypes = user?.preferences?.contentTypes || []
    
    return (
    <section className="home-page">
        {!user && (
            <div className="guest-home">
                <h1>AI Crypto Advisor </h1>
                
                <p>
                    Your personalized crypto investor dashboard.
                </p>
                
                <p>
                    Track coin prices, market news,
                    AI insights and fun crypto memes — all tailored to your interests.
                </p>
                
                <div className="home-actions">
                    <Link to='/login'> Login </Link>
                    <Link to='/signup'> Get Started </Link> 
                </div>
            </div>
        )}
        
        {user && (
            <div className="user-home">
                <h1>
                    Welcome back {user.name} 
                </h1>
                
                <p> Your personalized crypto dashboard is ready. </p>
                
                <div className="preferences-preview">
                    <div className="dashboard-card">
                        <h3>Favorite Assets</h3>
                        <p>
                            {assets.length ? assets.join(', ') : 'No assets selected yet'}
                        </p>
                    </div>
                    
                    <div className="dashboard-card">
                        <h3>Investor Type</h3>
                        <p>
                            {investorType}
                        </p>
                    </div>
                    
                    <div className="dashboard-card">
                        <h3>Preferred Content</h3>
                        <p>
                            {contentTypes.length ? contentTypes.join(', ') : 'No content types selected yet'}
                        </p>
                    </div>
                </div>

                <div className="home-actions">
                    <Link className="dashboard-link" to='/dashboard' > Dashboard </Link>
                    <Link className="dashboard-link" to='/onboarding' > Update Preferences </Link>
                </div>
                
            </div>
        )}
        
        </section>
    )
}
