/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

// create context with initial value null
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const googleSignIn = (value) =>{
        console.log('hello',value);
    }
    // send to context as an object to access globally
    const AuthInfo = {
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;