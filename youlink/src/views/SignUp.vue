<script setup lang="ts">
import { googleSignIn, logOut } from '../stores/auth'
import { ref } from 'vue'
import { auth } from "../FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'vue-router'

let user_email = ref('')
let user_password = ref('')
let user_repassword = ref('')
let error_message = ref('')
const router = useRouter()

const userSignUp = async (user_email: string, user_password: string) => {
    if (!user_email) {
        error_message.value = 'メールアドレスを入力してください'
        return
    }
    if (!user_password) {
        error_message.value = 'パスワードを入力してください'
        return
    }
    if (!user_repassword) {
        error_message.value = 'パスワードを再入力してください'
        return
    }

    logOut()

    createUserWithEmailAndPassword(auth, user_email, user_password)
    .then((userCredential) => {
        console.log("signup")
        const user = userCredential.user;
        router.push('/')
    })
    .catch((error) => {
        const error_code = error.code;
        console.log(error_code)

        if (error_code === 'auth/email-already-exists') {
            error_message.value = '入力したメールアドレスはすでに利用されています'
        }
        else if (error_code === 'auth/invalid-password') {
            error_message.value = 'パスワードは6文字以上にしてください'
        }
        else 
        {
            error_message.value = '登録に失敗しました'
        }
    })
}
</script>

<template>
    <div>
        <input type="email" v-model="user_email">
        <input type="text" v-model="user_password">
        <input type="text" v-model="user_repassword">
        <p>{{error_message}}</p>
        <button @click="userSignUp(user_email, user_password)">登録</button>
        <button @click="googleSignIn">google登録</button>
    </div>
</template>