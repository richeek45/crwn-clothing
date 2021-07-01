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
   
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()

  console.log(userRef);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



