<script setup lang="ts">
import { googleSignIn } from '../stores/auth'
import { ref } from 'vue'
import { auth } from "../FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"

let user_email = ref('')
let user_password = ref('')
let error_message = ref('')


const userSignIn = (user_email: string, user_password: string) => {
    if (!user_email) {
        error_message.value = 'メールアドレスを入力してください'
        return
    }
    if (!user_password) {
        error_message.value = 'パスワードを入力してください'
        return
    }

    signInWithEmailAndPassword(auth, user_email, user_password)
    .then((userCredential) => {
        const user = userCredential.user;
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

</script>

<template>
    <div>
        <input type="email" v-model="user_email">
        <input type="text" v-model="user_password">
        <p>{{ error_message }}</p>
        <button @click="userSignIn(user_email, user_password)">サインイン</button>
        <button @click="googleSignIn">google登録</button>
    </div>
</template>