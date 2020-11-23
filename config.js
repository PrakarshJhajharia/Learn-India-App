import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDhLC3GnW1dBdN7278vuN2jb22TJkOevMI",
  authDomain: "book-santa-app-34b49.firebaseapp.com",
  databaseURL: "https://book-santa-app-34b49.firebaseio.com",
  projectId: "book-santa-app-34b49",
  storageBucket: "book-santa-app-34b49.appspot.com",
  messagingSenderId: "801811624161",
  appId: "1:801811624161:web:53354bc728f492357407a0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();