import { createContext } from "react";

// create context with initial value is null
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {



    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;