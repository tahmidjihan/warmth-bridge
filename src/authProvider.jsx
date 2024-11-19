import React, { createContext, useContext, useEffect } from 'react';
import auth from './firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateEmail,
  updateProfile,
  signOut,
} from 'firebase/auth';

export const authContext = createContext();
function AuthProvider({ children }) {
  //Create a User
  const [user, setUser] = React.useState(null);
  function createUser(email, password, name, photo) {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
    });
    updateUser(name, photo);
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
  // update profile
  function updateUser(name, photo, email) {
    name &&
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    photo &&
      updateProfile(auth.currentUser, {
        photoURL: photo,
      });
    email && updateEmail(auth.currentUser, email);
  }
  //logout
  function logout() {
    signOut(auth).then(() => {
      setUser(null);
    });
  }

  const value = {
    createUser,
    loginUser,
    signInWithGoogle,
    user,
    updateUser,
    logout,
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
