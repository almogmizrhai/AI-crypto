// home cmp jsx

import { Link } from 'react-router-dom'

import { useAuth } from '../context/AuthContext.jsx'

export function Home() {
    const { user } = useAuth()
    
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
                            {user.preferences.assets.join(', ')}
                        </p>
                    </div>
                    
                    <div className="dashboard-card">
                        <h3>Investor Type</h3>
                        <p>
                            {user.preferences.investorType}
                        </p>
                    </div>
                    
                    <div className="dashboard-card">
                        <h3>Preferred Content</h3>
                        <p>
                            {user.preferences.contentTypes.join(', ')}
                        </p>
                    </div>
                </div>
                
                <Link className="dashboard-link" to='/dashboard' > Dashboard </Link>
            </div>
        )}
        
        </section>
    )
}
