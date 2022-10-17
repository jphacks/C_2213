<template>
  <div class="title">
    <h1>新規募集画面</h1>
    <div>
      タイトル<input type="text" v-model="title"><br/>
    </div>
    <div>
      タグ<input type="text" v-model="tag"><br/>
    </div>
    <div>
      日程<input type="text" v-model="date"><br/>
    </div>
    <div>
      時刻<input type="text" v-model="time"><br/>
    </div>
    <div>
      画像<input type="text" v-model="image"><br/>
    </div>
    <div>
      <button @click="create">登録</button>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import { getFirestore,addDoc,collection,serverTimestamp, getDocs } from 'firebase/firestore'
import {db}from '../FirebaseConfig'

export default defineComponent({
  setup(){

    const title = ref<string>()
    const tag = ref<string>()
    const date = ref<string>()
    const time = ref<string>()
    const image = ref<string>()

    const create=()=>{
      if(!title.value || tag.value || date.value || time.value || image.value)
      try {
        console.log("起動");
        const  docRef = addDoc(collection(db, "users"), {
          title: title.value,
          tag: tag.value,
          date: date.value,
          time: time.value,
          image: image.value
        });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return{
    create,
    title,
    tag,
    date,
    time,
    image
  }
  }
})
</script>
<style>
.title{
    text-align: center;
}
</style>