import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
var firebaseConfig = {
  apiKey: "AIzaSyDHqQWjIJllQmPYDpsjUEP3QzQO82ro8hQ",
  authDomain: "my-smpl-project.firebaseapp.com",
  projectId: "my-smpl-project",
  databaseURL:"https://my-smpl-project-default-rtdb.firebaseio.com",
  storageBucket: "my-smpl-project.appspot.com",
  messagingSenderId: "188733700627",
  appId: "1:188733700627:web:5984d1683072f119ca5de6",
  measurementId: "G-RF3GHX80S8"
};

firebase.initializeApp ( firebaseConfig );

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, db, storage}


