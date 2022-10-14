<template>
    <div>
        <input type="text" v-model="user_email">
        <input type="text" v-model="user_password">
        <p>{{error_message}}</p>
        <button @click="userSignIn(user_email, user_password)">サインイン</button>
        <button @click="googleSignIn">google登録</button>
    </div>
</template>

<script setup lang="ts">
import { googleSignIn, signIn } from '../stores/auth'
import { ref } from 'vue'

let user_email = ref('')
let user_password = ref('')
let error_message = ref('')

const userSignIn = async (user_email: string, user_password: string) => {
    console.log(user_email)
    console.log(user_password)
    if (!user_email) {
        error_message = 'メールアドレスを入力してください'
        return
    }
        
    if (!user_password) {
        error_message = 'パスワードを入力してください'
        return
    }
     
    signIn(user_email, user_password)
}

</script>