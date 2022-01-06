import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXn6gMTf952TzAESQ_2engBNlcokGDiCM',
  authDomain: 'cooking-ninja-s.firebaseapp.com',
  projectId: 'cooking-ninja-s',
  storageBucket: 'cooking-ninja-s.appspot.com',
  messagingSenderId: '103489556300',
  appId: '1:103489556300:web:8a8fcea31f6d2d790d49e9',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
