import {defineStore} from 'pinia';
import {auth} from '@/js/firebase.js';
import type {AuthType, UserType} from '@/types';
import {reactive} from 'vue';
import router from '@/router';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { useStoreNotes } from '@/stores/storeNotes';

let getNoteSnapshot: any = null;

export const useStoreAuth = defineStore('storeAuth', () => {
  const signedUser = reactive<UserType>({
    id: null,
    email: null,
    displayName: null,
  });
  // --- ACTIONS ---
  function init() {
    const storeNotes = useStoreNotes();
    if (getNoteSnapshot) {
      getNoteSnapshot();
      // Unsubscribe from previous listener
    }


      getNoteSnapshot = onAuthStateChanged(auth, user => {
        if (user) {
          signedUser.id = user.uid;
          signedUser.email = user.email;
          signedUser.displayName = user.displayName;
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // redirect to notes if user is logged in
          router.push('/');
          storeNotes.init();
        } else {
          // User is signed out
          signedUser.id = null;
          signedUser.email = null;
          signedUser.displayName = null;
          router.replace('/auth');
          storeNotes.clearNotes();
        }
      });
  }

  function registerUser(credentials: AuthType) {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(userCredential => {
        // Signed up
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  function logoutUser() {
    signOut(auth)
      .then(() => {
        
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  }
  function loginUser(credentials: AuthType) {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error login', errorCode, errorMessage);
      });
  }

  return {
    registerUser,
    logoutUser,
    loginUser,
    init,
    signedUser,
  };
});