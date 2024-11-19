import React, { createContext, useContext, useEffect } from 'react';
import auth from './firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

export const authContext = createContext();
function AuthProvider({ children }) {
  //Create a User
  const [user, setUser] = React.useState(null);
  function createUser(email, password, name, photo) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        setUser(result.user);
      }
    );
  }
  //Login
  function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
    });
  }
  //sign in with google
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  }
  console.log(user === null ? 'null' : user);
  const value = {
    createUser,
    loginUser,
    signInWithGoogle,
    user,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unSubscribe();
  }, []);
  return (
    <>
      <authContext.Provider value={value}>{children}</authContext.Provider>
    </>
  );
}

export default AuthProvider;
