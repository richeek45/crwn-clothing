import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8psjIYKnuw05MfBWCI48YLnMS6F9mUUM",
  authDomain: "crwn-db-8ac43.firebaseapp.com",
  projectId: "crwn-db-8ac43",
  storageBucket: "crwn-db-8ac43.appspot.com",
  messagingSenderId: "221655872042",
  appId: "1:221655872042:web:7391930ab2c2e6d5620953",
  measurementId: "G-WDBVZTG8P7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  const collectionref = firestore.collection("users");
  const collectionSnapshot = await collectionref.get();
  console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

  console.log(userRef);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userRef;
};

// Adding collections to documents in firestore from an javascript object
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  // fire off our batch request
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapShot) => {
  const transformedCollection = collectionsSnapShot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });
  // console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
