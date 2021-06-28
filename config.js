import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDpcisH612rkQwjho3wJhb6N-Vrdcso-Tc",
    authDomain: "project71-935ce.firebaseapp.com",
    databaseURL: "https://project71-935ce-default-rtdb.firebaseio.com",
    projectId: "project71-935ce",
    storageBucket: "project71-935ce.appspot.com",
    messagingSenderId: "470589336306",
    appId: "1:470589336306:web:1e19fa129f90be18bf7e6b"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()