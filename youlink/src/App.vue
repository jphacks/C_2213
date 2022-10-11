<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { logOut, getUser } from '../src/stores/auth'
</script>

<template>
    <div class="flexbox">
      <div class="sidebar">
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/messages">Messages</RouterLink><br>
        <RouterLink to="/notification">Notification</RouterLink><br>
        <RouterLink to="/post">Post</RouterLink><br>
        <RouterLink to="/users">Users</RouterLink><br>
      </div>
      <div class="scene">
        <RouterView /> 
      </div>
      <h2 @click="logOut">LogOut</h2>
      <h2 @click="getUser">getUser</h2>
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
