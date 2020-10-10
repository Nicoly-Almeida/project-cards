const firebase = require("firebase")
require("firebase/auth");
require("firebase/app");
require("firebase/database");

const firebaseConfigApp = {
    apiKey: "AIzaSyDKx4kqe_2zz0et4B1dyhtbuYm8R7nGlCo",
    authDomain: "users-ef06d.firebaseapp.com",
    databaseURL: "https://users-ef06d.firebaseio.com",
    projectId: "users-ef06d",
    storageBucket: "users-ef06d.appspot.com",
    messagingSenderId: "431239181213",
    appId: "1:431239181213:web:1442e1b024f19de5e6b574",
    measurementId: "G-QQGGJF7ZJ8"
};

firebase.initializeApp(firebaseConfigApp)

module.exports = firebase

