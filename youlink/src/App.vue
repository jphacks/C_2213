<script setup lang="ts">
import {  RouterView } from 'vue-router'

</script>

<template>
<<<<<<< HEAD
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
=======
  <div class="scene">
    <RouterView /> 
  </div>
>>>>>>> bd7713f7f34c85aa83da0475806deeabca1f26ba
</template>

<style scoped lang="scss">
$mq-breakpoints: (
    xl: 1440px,
    lg: 1280px,
    md: 1024px,
    tb: 768px,
    sm: 576px,
    xs: 414px) !default;

// Media Queryの設定
@mixin media($breakpoint: md, $rule: min, $subtraction: false) {
    $breakpoint: map_get($mq-breakpoints, $breakpoint);

    @if $rule==max and $subtraction {
        $breakpoint: $breakpoint - 0.0625;
    }

    @media screen and (#{$rule}-width: $breakpoint) {
        @content;
    }
}

body {
  @include media(sm) {
    font-size: 10px;
  }

  @include media(md) {
    font-size: 12px;
  }

  @include media(lg) {
    font-size: 14px;
  }

  @include media(xl) {
    font-size: 16px;
  }
}
</style>
