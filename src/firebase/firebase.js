import firebase from 'firebase'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyC4EDIxMmzoB-5_2PpfgbdQ67V1_UsBxvY",
    authDomain: "req-it-issues.firebaseapp.com",
    projectId: "req-it-issues",
    storageBucket: "req-it-issues.appspot.com",
    messagingSenderId: "28611348808",
    appId: "1:28611348808:web:1854a333c094f54409cb7d",
    measurementId: "G-X2TZ2PY0PY"
  };
  // Initialize Firebase
  if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }

  const storage = firebase.storage();

//   firebase.analytics();

  export {
      storage, firebase as default 
  }