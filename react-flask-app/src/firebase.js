import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2G8NdzN5ASWgCQjCBo9oti72lPKvksT4",
    authDomain: "twitter-clone-7e6e4.firebaseapp.com",
    databaseURL: "https://twitter-clone-7e6e4.firebaseio.com",
    projectId: "twitter-clone-7e6e4",
    storageBucket: "twitter-clone-7e6e4.appspot.com",
    messagingSenderId: "340563788848",
    appId: "1:340563788848:web:4a2daa5edee74d459419f5",
    measurementId: "G-6TQF1RP25R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;