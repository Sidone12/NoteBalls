declare module '@/js/firebase.js' {
  import {FirebaseApp} from 'firebase/app';
  import { Firestore } from 'firebase/firestore';
   import {Auth} from 'firebase/auth';

  export const db: Firestore;
  export const auth: Auth;
  export const app: FirebaseApp;
}
