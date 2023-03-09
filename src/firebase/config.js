import { initializeApp } from 'firebase/app';
import { getFirestore, collection,doc, getDocs } from 'firebase/firestore/lite';
// for version 8
// import firebase from "firebase/app"
// import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAoy53xbj0Krw1H2De1nveIROo-EmkxztE",
    authDomain: "vue-a3af7.firebaseapp.com",
    projectId: "vue-a3af7",
    storageBucket: "vue-a3af7.appspot.com",
    messagingSenderId: "838839779911",
    appId: "1:838839779911:web:822d1aae9b5b8f820fa762"
};

//   init firebase version 8
// firebase.initializeApp(firebaseConfig)

// database setup version 8
// const db = firebase.firestore();

//   init firebase version 9
const app = initializeApp(firebaseConfig);

// database setup version 9
const db = getFirestore(app);

export {db};
