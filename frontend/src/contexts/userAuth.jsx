import { createContext, useContext, useEffect, useState } from "react";

import { is_authenticated, register } from "../enpoints/api";

import { login } from "../enpoints/api";

import { useNavigate } from "react-router-dom"


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const nav = useNavigate()

    const get_authenticated = async () => {
        try {
            const success = await is_authenticated()
            setIsAuthenticated(success)
        } catch(error) {
            setIsAuthenticated(false)
        } finally {
            setLoading(false)
        }
    }

    const login_user = async (username, password) => {
        const success = await login(username, password)
        if (success) {
            setIsAuthenticated(true)
            nav('/')
        }
    }

    const register_user = async (username, email, password, cPassword) => {
        if (password === cPassword) {
            try {
                await register(username, email, password)
                nav('/login')
                alert('successfully registered user')
            } catch(error) {
                alert('error registering user')
            }
        }
        else {
            alert('passwords dont match')
        }
    }

    useEffect(() => {
        get_authenticated();
    }, [window.location.pathname])

    return (
        <AuthContext.Provider value={{isAuthenticated, loading, login_user, register_user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);