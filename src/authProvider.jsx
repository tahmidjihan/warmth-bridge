import React, { createContext, useContext, useEffect } from 'react';
import auth from './firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();

function AuthProvider({ children }) {
  //Create a User
  const [user, setUser] = React.useState(null);
  async function createUser(email, password, name, photo) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    setUser(res.user);

    await updateUser(name, photo);
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
  async function updateUser(name, photo, email) {
    (await name) &&
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    (await photo) &&
      updateProfile(auth.currentUser, {
        photoURL: photo,
      });
  }
  //forgot password
  function forgotPassword(email) {
    sendPasswordResetEmail(auth, email);
    console.log(email);
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
    forgotPassword,
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
