import {createContext, useReducer} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer,{
        user:null
    })
}