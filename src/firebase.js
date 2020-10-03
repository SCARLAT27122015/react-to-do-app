import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHPa96OpRMhTN-k4ntCxUxPc10heKtpP0",
    authDomain: "todo-app-87a89.firebaseapp.com",
    databaseURL: "https://todo-app-87a89.firebaseio.com",
    projectId: "todo-app-87a89",
    storageBucket: "todo-app-87a89.appspot.com",
    messagingSenderId: "250011125242",
    appId: "1:250011125242:web:f293f41c3cb642d5231043",
    measurementId: "G-EZ2521Y6R3"
});

const db = firebaseApp.firestore();
export default db;

