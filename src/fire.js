import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyA_tM82QRid2vEFJikYv8SyMJB5uR95BVE",
    authDomain: "loginpage-639e4.firebaseapp.com",
    projectId: "loginpage-639e4",
    storageBucket: "loginpage-639e4.appspot.com",
    messagingSenderId: "946035230989",
    appId: "1:946035230989:web:1ec326e8b26ae157bfc844"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, db, storage}