import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase.init';


export const Authcontext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        createUser,
        signInUser,
        Logout,
        user
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}

        </Authcontext.Provider>
    );
};

export default Authprovider;