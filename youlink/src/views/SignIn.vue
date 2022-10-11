<template>
    <div>
        <input type="text" v-model="user_email">
        <input type="text" v-model="user_password">
        <button @click="signIn">登録</button>
        <button @click="googleSignIn">google登録</button>
    </div>
</template>

<script setup lang="ts">
import { signIn, googleSignIn, user_email, user_password } from '../stores/auth'


</script>