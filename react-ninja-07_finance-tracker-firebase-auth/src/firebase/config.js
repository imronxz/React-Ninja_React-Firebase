import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBpcHr-FrXxwqafxZW3PSyEXEDSua48uwc',
  authDomain: 'finance-tracker-react.firebaseapp.com',
  projectId: 'finance-tracker-react',
  storageBucket: 'finance-tracker-react.appspot.com',
  messagingSenderId: '802322911103',
  appId: '1:802322911103:web:f0a2e042494a7f2208d44a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
