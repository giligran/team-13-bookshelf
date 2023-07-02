import 'modern-normalize/modern-normalize.css';

import { auth } from './js/firebase';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.dir(user);
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
