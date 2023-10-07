import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const  AuthContext = createContext(null)

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading,setLoading]= useState(true)


  // create account email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // singIn with email and password 
  const emailSingIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // Sing in with github 

  const githubSingIn= ()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }

  // singIn with google
  const googleSingIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  // update user profile

  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

// user email verification

const emailVerification =()=>{
  setLoading(true)
   return sendEmailVerification(auth.currentUser)
}


// singOut

const logOut =()=>{
  setLoading(true)
  return signOut(auth)
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser)
    setLoading(false)
    console.log('auth stage change',currentUser);
  })

  return ()=>{
    unSubscribe()
  }
},[])


  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    emailVerification,
    githubSingIn,
    googleSingIn,
    emailSingIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;