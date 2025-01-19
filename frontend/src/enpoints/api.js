import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const LOGIN_URL = `${BASE_URL}token/`
const REFRESH_URL = `${BASE_URL}token/refresh/`
const NOTES_URL = `${BASE_URL}notes/`
const LOGOUT_URL = `${BASE_URL}logout/`
const AUTH_URL = `${BASE_URL}authenticated/`
const REGISTER_URL = `${BASE_URL}register/`
const ADD_NOTE_URL = `${BASE_URL}add_note/`
const DELETE_NOTE_URL = `${BASE_URL}delete_note/`


export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL,
        {username, password}, 
        {withCredentials: true}
    )
    return response.data.success
};

export const refresh_token = async () => {
    try {
        await axios.post(REFRESH_URL, 
            {}, 
            {withCredentials: true}
        )
        return true
    } catch(error) {
        return false
    }

}

export const get_notes = async () => {
    try {
        const response = await axios.get(NOTES_URL, 
            {withCredentials: true}
        )
        return response.data
    } catch (error) {
        return call_refresh(error, axios.get(NOTES_URL, { withCredentials: true }))
    }

}

const call_refresh = async (error, func) => {
    if (error.response && error.response.status === 401) {
        const tokenRefreshed = await refresh_token();

        if (tokenRefreshed) {
            const retryResponse = await func()
            return retryResponse.data
        }
    }

    return false
}

export const logout = async () => {
    try {
        const response = await axios.post(
            LOGOUT_URL, 
            {}, 
            {withCredentials: true}
        )
        return true
    } catch(error) {
        return false
    }
    
}

export const authenticated_user = async () => {
    try {
        const response = await axios.post(AUTH_URL, {}, {withCredentials: true})
        return response.data
    } catch(error) {
        return false
    }
    
}

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(REGISTER_URL, 
            {username, email, password}, 
            {withCredentials: true}
        )
        return response.data
    } catch(error) {
        return false
    }
    
}

export const add_note = async (description) => {
    try {
        const response = await axios.post(ADD_NOTE_URL, 
            {description}, 
            {withCredentials: true}
        )
        return response.data
    } catch(error) {
        return false
    }
}

export const delete_note = async (note_id) => {
    try {
        await axios.post(`${DELETE_NOTE_URL}${note_id}/`, {}, {withCredentials: true})
        return true
    } catch(error) {
        
        return false
    }
}
