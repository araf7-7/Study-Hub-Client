import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import auth from "../Firebase/firebase.config";
// import auth from './../firebase/firebase.config';
import auth from './../Firebase/firebase.config';
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refetch, setRefetch] = useState(false)
    // console.log(loading)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUserProfile = (FullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: FullName,
            photoURL: image
        })
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    const logout = () => {
        setUser(null)
        signOut(auth)
    }
    // console.log(user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
            if (user) {
                const loggedUser = { email: user.email }
                axios.post('https://assignment-11-server-tawny-nine.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }

        });
        return () => unsubscribe()
    }, [refetch])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logout,
        user,
        setUser,
        loading,
        refetch,
        setRefetch,
        updateUserProfile
    }
    return (

        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>


    );
};

export default FirebaseProvider;