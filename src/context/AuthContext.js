import { useContext, createContext, useState, useEffect } from 'react';
import { 
        GoogleAuthProvider,
        signInWithRedirect,
        signOut,
        onAuthStateChanged
    } 
from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    const googleSigIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe()
        }
    }, [])

    return (        
        <AuthContext.Provider value={{googleSigIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}