<script setup lang="ts">
import { googleSignIn, signUp } from '../stores/auth'
import { ref } from 'vue'

let user_email = ref('')
let user_password = ref('')
let user_repassword = ref('')
const userSignUp = async (user_email: string, user_password: string) => {
    signUp(user_email, user_password)
}
</script>

<template>
    <div>
        <input type="text" v-model="user_email">
        <input type="text" v-model="user_password">
        <input type="text" v-model="user_repassword">
        <button @click="userSignUp(user_email, user_password)">登録</button>
        <button @click="googleSignIn">google登録</button>
    </div>
</template>