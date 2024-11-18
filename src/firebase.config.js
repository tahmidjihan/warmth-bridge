// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZrSFK3GXlx1m0pbdJaGAKvBOaNtm8EjU',
  authDomain: 'warmth-bridge.firebaseapp.com',
  projectId: 'warmth-bridge',
  storageBucket: 'warmth-bridge.firebasestorage.app',
  messagingSenderId: '834699841494',
  appId: '1:834699841494:web:22d87228630b26e649de77',
  measurementId: 'G-QFT0H5K4PK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
