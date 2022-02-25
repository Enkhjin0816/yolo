import React, { createContext, useState } from "react";

export const AuthContext = createContext({
    user: {},
    login: () => {},
    signUp: () => {},
    logout: () => {}
})


export const AutProvider = ({children}) => {
    const [user, setUser] = useState({});
    const login = (email, password) => {

    }
    const signUp = () => {
        
    }
    const logout = () => {
        
    }
    return (
        <AuthContext.Provider value={{login, user, signUp, logout}}>
            {children}
        </AuthContext.Provider>
    )
}