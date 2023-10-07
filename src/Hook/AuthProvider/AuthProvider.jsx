import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

// create context with initial value is null
export const AuthContext = createContext(null);
// create auth 
const auth = getAuth(app);
//create provider for google sign in 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // Whoever is using this function can give parameter and that parameter will lift up to above step 
    const getValueFromWhoIsUsingIt = (value) =>{
        console.log('hello I am',value);
    }
    // if webcall this function anywhere from any component then it will return signInWithPopup() method 
    const googleSignIn = () =>{
        // it is returning with calling the function and pass the auth (auth contains each credential from firebase.config.js) and provider
        return signInWithPopup(auth,googleProvider);
    }

    // To share globally we will put it into an object and set value to AuthContext.Provider
    const AuthInfo ={
        getValueFromWhoIsUsingIt,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// Adding proptypes 
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;