// Login Page jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../services/auth.service.js'
import { flashMsg } from '../services/util.service.js'

export function LoginPage() {
    const navigate = useNavigate()
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    
    async function onLogin(ev) {
        ev.preventDefault()
        
        try {
            const data = await login(credentials)
            localStorage.setItem('token', data.token)
            localStorage.setItem(
                'user',
                JSON.stringify(data.user)
            )
            flashMsg(`Welcome back ${data.user.name} `, 'success')
            
            if (!data.user.isOnboardingCompleted) {
                navigate('/onboarding')
            } else {
                navigate('/dashboard')
            }
        } catch (err) {
            console.log(err)
            
            flashMsg('Login failed', 'error')
        }
    }
    
    function handleChange(ev) {
        const { name, value } = ev.target
        
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    
    return (
    <div className="login-page">
        <h1>Login</h1>
        
        <form className="login-form" onSubmit={onLogin}>
            <input type='email' name='email' placeholder='Email' value={credentials.email} onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' value={credentials.password} onChange={handleChange}/>
            <button className="btn btn-login">Login</button>
        </form>
    </div>
    )
}