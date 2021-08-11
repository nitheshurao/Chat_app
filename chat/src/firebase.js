import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    // apiKey: "AIzaSyB6ogLyZ96mQmAnjMMCLnUAdQ1WF81FS3I",
    // authDomain: "loginauth-27e2e.firebaseapp.com",
    // databaseURL: "https://loginauth-27e2e.firebaseio.com",
    // projectId: "loginauth-27e2e",
    // storageBucket: "loginauth-27e2e.appspot.com",
    // messagingSenderId: "356715976870",
    // appId: "1:356715976870:web:2a9de9195109dcf3357c67",
    // measurementId: "G-PWF948M17S"

    // apiKey: "AIzaSyDjxsJq4Tcs2zohn2fm5EYI-luGKp0Q-Xw",
    // authDomain: "photo-gallery-730c0.firebaseapp.com",
    // databaseURL: "https://photo-gallery-730c0.firebaseio.com",
    // projectId: "photo-gallery-730c0",
    // storageBucket: "photo-gallery-730c0.appspot.com",
    // messagingSenderId: "557835134895",
    // appId: "1:557835134895:web:330c6bb45f066c5cac315a",
    // measurementId: "G-N3QB1CZ9GC"

    apiKey: "AIzaSyCfjvYh4gIWSMP0m_VX4RYvbd7h8o00pQs",
    authDomain: "chatt-fed0c.firebaseapp.com",
    projectId: "chatt-fed0c",
    storageBucket: "chatt-fed0c.appspot.com",
    messagingSenderId: "718929452336",
    appId: "1:718929452336:web:5e3a69b6b6a89d231cfcf5",
    measurementId: "G-4TWGLZDEJT"

})

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth }
