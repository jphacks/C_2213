<template>
  <div >
    <div class="title">
     <h1>JPHACKS登壇者語りませんか？</h1>
    </div>
    <div class="offer-inputarea">
      <div class="offer-inputarea-left">
        <div class="offer-inputarea-left-date">
          日程:
        </div>
        <div class="offer-inputarea-left-date">
          時刻:
        </div>
      </div>

      <div class="offer-inputarea-right">
        <p>ひとこと</p>
        <hr>
        <textarea name="" v-model="message"></textarea>
      </div>
    </div>
    <button>応募</button>

  </div>
</template>

<script lang="ts">
import {ref,onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs,query,where } from '@firebase/firestore'
import {auth,db} from '../FirebaseConfig'

export default ({
  setup() {
    const message=ref('')
    const posts = ref()
    const postList =<any>[];

    const fetchFirebase=async()=>{
      const postRef=collection(db,"post");
      const fetchFirebase=async()=>{
      const postRef=collection(db,"post");
      // const querySnapshot =getDocs(query(postRef,where("postid","==",(useRoute().params.posts))
      // ).then(snapshot => {
      //   snapshot.forEach(doc => {
      //     console.log(`${doc.id}: ${doc.data().userName}`);
      //   })
      // }))
      }}

    return { message }
    }
})
</script>

<style>
.title{
    text-align: center;
}
.offer-input-area{
  display: flex;
}
</style>