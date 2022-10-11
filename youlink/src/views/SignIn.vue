<template>
    <div>
        <input type="text" v-model="user_email">
        <input type="text" v-model="user_password">
        <button @click="signIn">登録</button>
        <button @click="googleSignIn">google登録</button>
    </div>
</template>

<script setup lang="ts">
import { googleSignIn } from '../stores/auth'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth"

let user_email : string = "aaa@aa.aa.aa"
let user_password : string = "aaaaaa"

const signIn = async () => {
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
}

</script>