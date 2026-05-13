// Dashboard Header cmp jsx

import { useAuth } from '../context/AuthContext.jsx'

export function DashboardHeader() {
    const { user } = useAuth()
    
    return (
    <section className="dashboard-header">
        <h1>
            Welcome back {user?.name} 
        </h1>
        
        <p>
            Your personalized crypto dashboard
        </p>
    </section>
    )
}