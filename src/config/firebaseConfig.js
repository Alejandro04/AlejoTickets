import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyA9bAu_WPW1Q7FsYQGzzw-lL6i6CIlbwo0",
    authDomain: "instalejo.firebaseapp.com",
    databaseURL: "https://instalejo.firebaseio.com",
    projectId: "instalejo",
    storageBucket: "instalejo.appspot.com",
    messagingSenderId: "485409781817",
    appId: "1:485409781817:web:2714540c4df36ddf5835e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase 