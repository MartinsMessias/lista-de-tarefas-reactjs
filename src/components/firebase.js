import firebase from "firebase";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDm8-QcVmdddXaJl6kCSRHUvZNUZPYb188",
  authDomain: "todolist-1d5e8.firebaseapp.com",
  databaseURL: "https://todolist-1d5e8.firebaseio.com",
  projectId: "todolist-1d5e8",
  storageBucket: "todolist-1d5e8.appspot.com",
  messagingSenderId: "444533742981",
  appId: "1:444533742981:web:2f7eb27fb5de62f8a3b8ec",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
