import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../FirebaseConfig"

let user_email : string
let user_password : string

const provider = new GoogleAuthProvider();

const signIn = async () =>
createUserWithEmailAndPassword(auth, user_email, user_password)
  .then((userCredential) => {
    console.log("signin")
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const googleSignIn = async () => {
    console.log("click")
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
