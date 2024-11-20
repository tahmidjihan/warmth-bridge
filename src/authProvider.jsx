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
import { ToastContainer, toast } from 'react-toastify';

export const authContext = createContext();

function AuthProvider({ children }) {
  //Create a User
  const [user, setUser] = React.useState(null);
  async function createUser(email, password, name, photo) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    setUser(res.user);

    await updateUser(name, photo);
    return res;
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
    return provider;
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
  }
  //logout
  function logout() {
    signOut(auth).then(() => {
      setUser(null);
    });
  }
  //toasts
  const info = (msg) => toast.success(msg);
  const success = (msg) => toast.success(msg);
  const error = (msg) => toast.success(msg);
  const warning = (msg) => toast.success(msg);
  const toasts = {
    info,
    success,
    error,
    warning,
  };
  const value = {
    createUser,
    loginUser,
    signInWithGoogle,
    user,
    updateUser,
    logout,
    forgotPassword,
    toasts,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unSubscribe();
  }, []);
  return (
    <>
      <authContext.Provider value={value}>
        {children}
        <ToastContainer />
      </authContext.Provider>
    </>
  );
}

export default AuthProvider;
