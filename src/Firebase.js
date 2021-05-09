import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDi4SxqrsYgY4gGsZcrp2oZeUhFEISOHno",
    authDomain: "instagram-clone-c2e94.firebaseapp.com",
    databaseURL: "https://instagram-clone-c2e94-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "instagram-clone-c2e94",
    storageBucket: "instagram-clone-c2e94.appspot.com",
    messagingSenderId: "52187938841",
    appId: "1:52187938841:web:d73cc681526b5455cfea88",
    measurementId: "G-X1ZENGC6S7"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };


