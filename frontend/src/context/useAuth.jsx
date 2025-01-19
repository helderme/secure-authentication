import { createContext, useContext, useEffect, useState } from "react";

import { authenticated_user, register, login } from "../enpoints/api.js";

import { useNavigate } from "react-router-dom"


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const nav = useNavigate()

    const get_authenticated_user = async () => {
        try {
            const user = await authenticated_user()
            setUser(user);
        } catch(error) {
            setUser(null);
        } finally {
            setLoading(false)
        }
    }

    const login_user = async (username, password) => {
        const success = await login(username, password)
        if (success) {

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
        get_authenticated_user();
    }, [window.location.pathname])

    return (
        <AuthContext.Provider value={{ user, loading, login_user, register_user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);