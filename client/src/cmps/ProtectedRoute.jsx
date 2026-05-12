// Protected Route cmp jsx

import { Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import { flashMsg } from '../services/util.service.js'

export function ProtectedRoute({ children }) {
    const { user } = useAuth()
    
    if (!user) {
        flashMsg('Please login to access this page', 'danger')
        return <Navigate to='/login' />
    }
    
    return children
}