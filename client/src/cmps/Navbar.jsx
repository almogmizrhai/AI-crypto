// Nav bar jsx 

import { Link } from 'react-router-dom'
import { DarkMode } from '../cmps/DarkMode.jsx'

export function Navbar() {
    return(
        <nav className='nav-bar grid'>
            <h2>AI Crypto</h2>

            <DarkMode />

            <div className='navbar-links grid'>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                <Link to='/onboarding'>OnBoarding</Link>
                <Link to='/dashboard'>Dashboard</Link>
            </div>


        </nav>
    )
}