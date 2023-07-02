// Import the functions you need from the SDKs you need
import { firebaseConfig } from './firebaseConfig.js';
import { getApp, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const localKey = 'user';

const app = initializeApp(firebaseConfig);
console.log(getApp());
export const auth = getAuth(app);
const database = getDatabase(app);

const user = auth.currentUser;
export const signUpUser = async (name, email, password) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password);
  const userCredential = await newUser;
  signInUser(email, password);
  localStorage.setItem(localKey + '-' + name, userCredential.user);
  console.log(userCredential);
};

export const signInUser = async (email, password) => {
  const currentUser = await signInWithEmailAndPassword(auth, email, password);
  const userCredential = currentUser;

  return userCredential;
};

export const checkAuth = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      // console.log('вы авторизовались ', user);
    } else {
      // console.log('вы не авторизованы ');
    }
  });
};
