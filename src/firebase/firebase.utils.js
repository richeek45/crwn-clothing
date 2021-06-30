import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8psjIYKnuw05MfBWCI48YLnMS6F9mUUM",
  authDomain: "crwn-db-8ac43.firebaseapp.com",
  projectId: "crwn-db-8ac43",
  storageBucket: "crwn-db-8ac43.appspot.com",
  messagingSenderId: "221655872042",
  appId: "1:221655872042:web:7391930ab2c2e6d5620953",
  measurementId: "G-WDBVZTG8P7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



