<script setup lang="ts">
import { logOut } from '../stores/auth'
import { ref } from 'vue'
import { auth } from "../FirebaseConfig"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth"
import { useRouter } from 'vue-router'

let user_email = ref('')
let user_password = ref('')
let error_message = ref('')
const router = useRouter()


const userSignIn = (user_email: string, user_password: string) => {
    if (!user_email) {
        error_message.value = 'メールアドレスを入力してください'
        return
    }
    if (!user_password) {
        error_message.value = 'パスワードを入力してください'
        return
    }

    logOut()

    signInWithEmailAndPassword(auth, user_email, user_password)
    .then((userCredential) => {
        const user = userCredential.user;
        router.push('/')
    })
    .catch((error) => {
        const error_code = error.code
        if (error_code === 'auth/invalid-email'){
            error_message.value = '無効なメールアドレスです'
        } 
        else if (error_code === 'auth/wrong-password') {
            error_message.value = 'パスワードが間違っています'
        }
        else {
            console.log(error.code)
            error_message.value = 'サインインに失敗しました'
        }
    })
}
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user)
        
        router.push('/')
    }).catch((error) => {
        console.log(error)
    })
}
</script>

<template>
    <div>
        <input type="email" v-model="user_email">
        <input type="text" v-model="user_password">
        <p>{{ error_message }}</p>
        <button @click="userSignIn(user_email, user_password)">サインイン</button>
        <button @click="googleSignIn">googleログイン</button>
    </div>
</template>