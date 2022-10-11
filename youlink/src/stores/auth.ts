import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../FirebaseConfig"

export let user_email : string
export let user_password : string

const provider = new GoogleAuthProvider();

export const signIn = async () =>
    console.log(`email : ${user_email}`)
    console.log(`password : ${user_password}`)
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
    })

export const googleSignIn = async () => {
    console.log("click")
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        // ...
    }).catch((error) => {
        console.log(error)

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

    });
}


export const logOut = () =>
    signOut(auth).then(() => {
    console.log("Successfully LogOut")
    }).catch((error) => {
    console.log("Error LogOut")
    console.log(error)
    });

export const getUser = () => {
    const user = auth.currentUser;

    if (user) {
    console.log(user)
    } else {
    console.log("Not Login")
    }
}
