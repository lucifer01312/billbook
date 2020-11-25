var firebase=require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyA4lBqIqy5-2nLEtlYNY1ScVEgmuhO0bZ4",
    authDomain: "billbook-757fe.firebaseapp.com",
    databaseURL: "https://billbook-757fe.firebaseio.com",
    projectId: "billbook-757fe",
    storageBucket: "billbook-757fe.appspot.com",
    messagingSenderId: "224078926629",
    appId: "1:224078926629:web:251fc89cabd05f705580cc"
  };
  // Initialize Firebase
 
  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore();
  module.exports=db;