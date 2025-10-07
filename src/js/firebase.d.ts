declare module '@/js/firebase.js' {
  import {FirebaseApp} from 'firebase/app';
  import {Firestore} from 'firebase/firestore';

  export const db: Firestore;
  export const app: FirebaseApp;
}
