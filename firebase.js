import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxIJeD0OmEQ2fc64Ig_FMsii4s5VMalTc',
  authDomain: 'react-native-signal.firebaseapp.com',
  projectId: 'react-native-signal',
  storageBucket: 'react-native-signal.appspot.com',
  messagingSenderId: '531690053242',
  appId: '1:531690053242:web:48afc2e2cd5a16316ce5c3',
  measurementId: 'G-39EFVH5B3P',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
