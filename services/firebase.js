import  firebase from 'firebase/app';
import 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyCcV9y-LlTv1Wz6xVtf2kG4tRt9rsBvUG0",
    authDomain: "dinnerbell-a5fdf.firebaseapp.com",
    projectId: "dinnerbell-a5fdf",
    storageBucket: "dinnerbell-a5fdf.appspot.com",
    messagingSenderId: "259019657865",
    appId: "1:259019657865:web:0a5f59a991b13402216c58"
  };
  
  

  firebase.initializeApp(firebaseConfig);

//set up auth

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



function signIn() {
    return auth.signInWithPopup(provider)
}

function logOut() {
    return auth.signOut()
}

export {
    auth,
    signIn,
    logOut
}