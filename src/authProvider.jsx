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
import 'react-toastify/dist/ReactToastify.css';
export const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  async function createUser(email, password, name, photo) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    setUser(res.user);
    await updateUser(name, photo);
    toast.success('User created successfully!');
    return res;
  }

  function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        toast.success('Logged in successfully!');
      })
      .catch((err) =>
        toast.error('something went wrong. Check your Information')
      );
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success('Google Sign-In successful!');
      })
      .catch((err) =>
        toast.error('something went wrong. Check your Information')
      );
    return provider;
  }

  async function updateUser(name, photo) {
    if (name) {
      await updateProfile(auth.currentUser, { displayName: name });
    }
    if (photo) {
      await updateProfile(auth.currentUser, { photoURL: photo });
    }
    toast.info('Profile updated!');
  }

  function forgotPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => toast.info('Password reset email sent!'))
      .catch((err) =>
        toast.error('something went wrong. Check your Information')
      );
  }

  function logout() {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success('Logged out successfully!');
      })
      .catch((err) =>
        toast.error('something went wrong. Check your Information')
      );
  }

  const success = (msg) => toast.success(msg);
  const error = (msg) => toast.error(msg);
  const warning = (msg) => toast.warning(msg);

  const toasts = { success, error, warning };

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
      <authContext.Provider value={value}>{children}</authContext.Provider>
      <ToastContainer limit={1} />
    </>
  );
}

export default AuthProvider;
