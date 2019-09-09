import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqMXyLbxVrWTIs4TRlisbAqUQWJ8Q_45c",
    authDomain: "catch-of-the-day-shemo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-shemo.firebaseio.com",

})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;