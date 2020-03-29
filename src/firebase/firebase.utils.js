import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const conf={
    apiKey: "AIzaSyA2HxYeXI80FgEjmzZBX6uC5XHVVvLkewc",
    authDomain: "crown-cloth-aecd4.firebaseapp.com",
    databaseURL: "https://crown-cloth-aecd4.firebaseio.com",
    projectId: "crown-cloth-aecd4",
    storageBucket: "crown-cloth-aecd4.appspot.com",
    messagingSenderId: "559642884150",
    appId: "1:559642884150:web:db586162cf9cf5aeba0097",
    measurementId: "G-97Y4L4EK4F"
}

 firebase.initializeApp(conf);

export const auth=firebase.auth();
export const fireStore=firebase.database();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
