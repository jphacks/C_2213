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
      <Datepicker v-model="date1" range />
      <Datepicker v-model="date2" range />
      <Datepicker v-model="date3" range />
      <Datepicker v-model="date4" range />
      <Datepicker v-model="date5" range />
    </div>
    <div>
      画像<input type="file" accept="image/jpeg,image/png,image/gif" @change="uploadFile"> <br/>
    </div>
    <div>
      一言<input type="text" v-model="describe"><br/>
    </div>
    <div>
      <button @click="create">登録</button>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent,ref as vueRef,onMounted} from 'vue'
import { getFirestore,addDoc,collection,serverTimestamp, getDocs } from 'firebase/firestore'
import { getDownloadURL, ref ,getStorage, uploadBytesResumable } from "firebase/storage";
import {db}from '../FirebaseConfig'

export default defineComponent({
  setup(){

    const title = vueRef<string>()
    const tag = vueRef<string>()
    const date1 = vueRef<any>()
    const date2 = vueRef<any>()
    const date3 = vueRef<any>()
    const date4 = vueRef<any>()
    const date5 = vueRef<any>()
    const describe = vueRef<string>()
    const fileData =vueRef<any>()

    onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date1.value = [startDate, endDate];
    })

    const uploadFile = (event:any)=>{
      fileData.value = event.target.files[0]
    }

    //投稿時の発火
    const create=()=>{
      try {
        const metadata={ contentType: 'image/jpeg',}
        const storage =getStorage();
        const imageRef=ref(storage,'/'+ title.value);

        uploadBytesResumable(imageRef, fileData.value, metadata).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url)=>{
            addDoc(collection(db, "post"), {
            title: title.value,
            tag: tag.value,
            schedule: date1.value,
            description: describe.value,
            filePath : url,
            created_at: serverTimestamp()
          }
          )
        })
        console.log("募集しました");
      });
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return{
    create,
    title,
    tag,
    date1,
    date2,
    date3,
    date4,
    date5,
    describe,
    uploadFile,
    fileData
  }
  }
})
</script>
<style>
.title{
    text-align: center;
}
</style>