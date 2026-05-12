// AuthContext jsx

import { createContext, useContext, useEffect,useState, } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])
    
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
    }
    
    return (
    <AuthContext.Provider
    value={{ 
        user, 
        setUser,
        logout,
    }}>
        {children}
        </AuthContext.Provider>
        )
    }
    
    export function useAuth() {
        return useContext(AuthContext)
    }