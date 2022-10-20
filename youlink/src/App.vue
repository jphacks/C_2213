<script setup lang="ts">
import {  RouterView } from 'vue-router'

</script>

<template>
  <div class="scene">
    <RouterView /> 
  </div>
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
</style>>
