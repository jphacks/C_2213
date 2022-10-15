import { signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth"
import { auth } from "../FirebaseConfig"
import { useRouter } from 'vue-router'
export const router = useRouter()

export const twitterSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
  
      const user = result.user;
        
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
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
        return user
    } else {
        console.log("Not Login")
        return
    }
}