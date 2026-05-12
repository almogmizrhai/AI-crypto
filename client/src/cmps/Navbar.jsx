// Nav bar jsx 

import { Link, useNavigate  } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import { DarkMode } from '../cmps/DarkMode.jsx'
import { flashMsg } from '../services/util.service.js'

export function Navbar() {
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    function onLogout() {
        logout()
        flashMsg('Logged out successfully ', 'success')
        navigate('/login')
    }

    return(
        <nav className='nav-bar grid'>
            <h2>AI Crypto</h2>

            <DarkMode />

            <div className='navbar-links grid'>
                <Link to='/'>Home</Link>
                {!user && (
                    <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                    </>
                )}
                
                {user && (
                    <>
                    <Link to='/dashboard'>Dashboard</Link>
                    <button onClick={onLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    )
}