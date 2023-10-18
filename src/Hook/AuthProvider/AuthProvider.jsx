/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,  GoogleAuthProvider,
    signInWithPopup,signOut,
    onAuthStateChanged, 
}from "firebase/auth";
import auth from '../Firebase/firebase.config';

// create context with initial value null
export const AuthContext = createContext(null);

// create google provider 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    //declare a state to store user information
    const [user, setUser] = useState(null); 
    const googleSignIn = () =>{ 
        return signInWithPopup(auth, googleProvider);
    }

    // email and password sign up 
    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // login with email and password 
    const logInWithEmailAndPassword = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //handle signout signout
    const logOut = () =>{
        return signOut(auth);
    }
    
    // set an observer given by firebase to observe user is there or not
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        //return with calling unsubscribe
        return ()=>{
            unSubscribe();
        }
    },[]);
    // send to context as an object to access globally
    const AuthInfo = {
        googleSignIn,
        logOut,
        user,
        signUp,
        logInWithEmailAndPassword,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;