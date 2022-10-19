<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { logOut, getUser } from '../src/stores/auth'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../src/FirebaseConfig' 
import { ref } from 'vue'

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
    <div class="flexbox">
      <div class="sidebar">
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/messages">Messages</RouterLink><br>
        <RouterLink to="/notification">Notification</RouterLink><br>
        <RouterLink to="/post">Post</RouterLink><br>
        <RouterLink to="/users">Users</RouterLink><br>
        <RouterLink to="/directmessage">DM</RouterLink><br>
      </div>
      <div class="scene">
        <RouterView /> 
      </div>
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

<style scoped>
.flexbox{
  display: flex;
  width: 100%;
  height: 100%;
  float: left;
}
.sidebar{
  width:10%;
  background-color: aqua;
  height: 100%;
  color: white;
  float: left; 
}
.scene{
  width:100%;
}
</style>>
