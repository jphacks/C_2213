<script setup lang="ts">
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../FirebaseConfig' 
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { logOut, getUser } from '../stores/auth'

let username = ref('')

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    if (user.displayName)
      username.value = user.displayName
    else
      username.value = "ゲスト"
  }
  else {
    username.value = ''
  }
})
</script>

<template>
    <div class="scene">
        <div v-if="username">
            <p @click="logOut">LogOut</p>
            <p>{{ username }}</p>
        </div>
        <div v-else>
            <RouterLink to="/signin"><p>SignIn</p></RouterLink>
            <RouterLink to="/signup"><p>SignUp</p></RouterLink>
            <p @click="getUser">getUser</p>
        </div>
    </div>
</template>