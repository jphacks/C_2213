<template>
  <div class="title">
    <h1>新規募集画面</h1>
    <div>
      <button @click="create">登録</button>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import {createFirebase}from '../FirebaseConfig'

export default defineComponent({
  setup(){
    const create=()=>{
      createFirebase()
    }
    return{
    create
  }
  }
})
</script>
<style>
.title{
    text-align: center;
}
</style>