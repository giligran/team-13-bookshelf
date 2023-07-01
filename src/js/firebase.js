// Import the functions you need from the SDKs you need
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const LOCAL_NAME = 'token-firebase';

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// const user = auth.currentUser;
// console.log(currentUser);

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // console.log(user); // ...
  } else {
    // User is signed out
    // ...
  }
});

export const signUpUser = async (name, email, password) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password);
  const userCredential = await newUser;
  console.log(userCredential);
};

// export function signUpUser(name, email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       const user = userCredential.user;
//     })
//     .then(data => console.log(data))
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Помилка реєстрації:', errorCode, errorMessage);
//     });
// }

export const signInUser = async (email, password) => {
  const currentUser = await signInWithEmailAndPassword(auth, email, password);
  const userCredential = await currentUser;
  console.log(userCredential);
};

// function checkAuth(user) {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// }

// console.log(localStorage.getItem(fbase_key));
