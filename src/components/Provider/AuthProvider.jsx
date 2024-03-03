// import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signInwithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile =(name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, current=>{
            setUser(current);
            setLoading(false)
        });

        return ()=> {
            return unsubscribe;
        }
    },[])


    const authInfo = {
        user,loading, signUp, login, logOut, signInwithGoogle, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;