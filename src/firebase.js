import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyBXPpNz4rwhyQNUmdevsa33T7xtn9zVuWc",
        authDomain: "clone-app-14e99.firebaseapp.com",
        databaseURL: "https://clone-app-14e99.firebaseio.com",
        projectId: "clone-app-14e99",
        storageBucket: "clone-app-14e99.appspot.com",
        messagingSenderId: "409132369306",
        appId: "1:409132369306:web:055db89d7532fe9240e623",
        measurementId: "G-V4QLV9G6T5"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};
