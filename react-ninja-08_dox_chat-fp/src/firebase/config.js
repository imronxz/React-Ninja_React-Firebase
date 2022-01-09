import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqIROuI2X53ylULZVsvpwUh7K2Zu8UieE',
  authDomain: 'doxchat-67012.firebaseapp.com',
  projectId: 'doxchat-67012',
  storageBucket: 'doxchat-67012.appspot.com',
  messagingSenderId: '247511695544',
  appId: '1:247511695544:web:2feb8608e19c5effd7b44d',
};

// init
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// firebase timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
