// pulling in firebase utiliity library
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDqgTeJpjTP5IaF1vscOhfNfqNaaWzbfNA',
  authDomain: 'digital-threads-db.firebaseapp.com',
  projectId: 'digital-threads-db',
  storageBucket: 'digital-threads-db.appspot.com',
  messagingSenderId: '288135186930',
  appId: '1:288135186930:web:0a8a94271d756f395f436b',
  measurementId: 'G-YQ3R5TWY52',
};

// for creating and storing user data in db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // query inside of firestore to see if document already exists
  // console.log(snapShot);

  // if snapshot doesnt exist, create data
  // checking if there is any data (snapshot)
  // if there isnt create a new user from the data from userAuth
  if (!snapShot.exists) {
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
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google auth utility
const provider = new firebase.auth.GoogleAuthProvider();

// trigger google pop up whenever we use this google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: 'select_account' });

// lots of pop ups, we want the google one
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
