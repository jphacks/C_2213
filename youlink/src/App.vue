<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { logOut, getUser } from '../src/stores/auth'

</script>

<template>
    <div class="flexbox">
      <div class="scene">
        <RouterView /> 
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
