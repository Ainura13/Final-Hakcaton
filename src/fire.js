import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB-zNPYHdSOatFGsSZ3N61hQ5bhTuZJYbQ',
  authDomain: 'final-hakathon.firebaseapp.com',
  projectId: 'final-hakathon',
  storageBucket: 'final-hakathon.appspot.com',
  messagingSenderId: '760852000106',
  appId: '1:760852000106:web:8984310371dd5459d04913',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
