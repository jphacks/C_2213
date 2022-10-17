<template>
  <div class="title">
    <h1>メッセージ画面</h1>
    <div class="recruitment-list" >
        <div class="recruitment-bg" @click="moveDirectMessage">
            <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()
        const moveDirectMessage = ()=> {
            router.push('/directmessage')
        }
        return {
            moveDirectMessage
        }
    },
})
</script>

<style>
.title{
    text-align: center;
}
</style>