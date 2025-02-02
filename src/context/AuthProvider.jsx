import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({displayName: "Dean Gray"});
  // const [currUser, setCurrUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (u) => setCurrUser(u));
  //   return () => unsubscribe();
  // }, []);

  return (
    <AuthContext.Provider value={{ currUser, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
