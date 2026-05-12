// Signup Page jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signup } from '../services/auth.service.js'
import { flashMsg } from '../services/util.service.js'

export function SignupPage() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })
    
    async function onSignup(ev) {
        ev.preventDefault()
        try {
            const data = await signup(userData)
            localStorage.setItem('token', data.token)
            localStorage.setItem(
                'user',
                JSON.stringify(data.user)
            )
            flashMsg(`Welcome ${data.user.name} `, 'success')
            
            navigate('/onboarding')
        } catch (err) {
            console.log(err)
            flashMsg('Signup failed', 'error')
        }
    }
    
    function handleChange(ev) {
        const { name, value } = ev.target
        
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    
    return (
    <div className="signup-page">
        <h1>Signup</h1>
        
        <form className="signup-form" onSubmit={onSignup}>
            <input type='text' name='name' placeholder='Name' value={userData.name} onChange={handleChange}/>
            <input type='email' name='email' placeholder='Email' value={userData.email} onChange={handleChange}/>
            <input type='password'
            name='password' placeholder='Password' value={userData.password} onChange={handleChange}/>
            <button className="btn btn-signup">Signup</button>
        </form>
    </div>
    )
}