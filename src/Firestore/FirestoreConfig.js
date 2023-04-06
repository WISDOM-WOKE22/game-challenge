import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuspN48TwtZeUCqcQZKwW9Yp32ymS6M1Q",
  authDomain: "game-challenge-50164.firebaseapp.com",
  projectId: "game-challenge-50164",
  storageBucket: "game-challenge-50164.appspot.com",
  messagingSenderId: "214430551852",
  appId: "1:214430551852:web:af3ca94f8bcbf911622689"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }