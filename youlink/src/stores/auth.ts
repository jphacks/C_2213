import { signOut } from "firebase/auth"
import { auth } from "../FirebaseConfig"



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


