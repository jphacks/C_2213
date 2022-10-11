<template>
  <div>
    <div class="search">
         <h1>ホーム画面</h1>
        <input type="text" v-model="textInput">
        {{textInput}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const textInput = ref('');
</script>

<style>
.search{
    text-align: center;
}

</style>