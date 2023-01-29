import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
        apiKey: "AIzaSyDBQL891nKM_3vrdJ2yHhflPZCAmZdM0zc",
        authDomain: "react-hooks-blog-425cf.firebaseapp.com",
        projectId: "react-hooks-blog-425cf",
        storageBucket: "react-hooks-blog-425cf.appspot.com",
        messagingSenderId: "854671678603",
        appId: "1:854671678603:web:d9366c2e2e1f652e4f488e"
    };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const firestore = app.firestore()
  export {firestore};