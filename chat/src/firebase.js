import firebase from "firebase";
const firebaseApp = firebase.initializeApp({


    // const firebaseConfig = {
    apiKey: "AIzaSyAyDCRfHuUAFijwQLlk2EXsHBFs5-I6sfM",
    authDomain: "whats-app-4acea.firebaseapp.com",
    databaseURL: "https://whats-app-4acea-default-rtdb.firebaseio.com",
    projectId: "whats-app-4acea",
    storageBucket: "whats-app-4acea.appspot.com",
    messagingSenderId: "232728871861",
    appId: "1:232728871861:web:be78db805e4a5f71570ffc",
    measurementId: "G-83EFHJCWLN"
    // };
    // your config

})

const dp = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {dp,auth}
