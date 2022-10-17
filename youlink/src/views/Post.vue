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
      <div v-if=date1>
        <Datepicker v-model="date2" range />
      </div>
      <div v-if=date2>
        <Datepicker v-model="date3" range />
      </div>
      <div v-if=date3>
        <Datepicker v-model="date4" range />
      </div>
      <div v-if=date4>
        <Datepicker v-model="date5" range />
      </div>
    </div>
    <div>
      時刻<input type="text" v-model="time"><br/>
    </div>
    <div>
      画像<input type="text" v-model="image"><br/>
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
import {defineComponent,ref,onMounted} from 'vue'
import { getFirestore,addDoc,collection,serverTimestamp, getDocs } from 'firebase/firestore'
import {db}from '../FirebaseConfig'

export default defineComponent({
  setup(){

    const title = ref<string>()
    const tag = ref<string>()
    const date1 = ref<any>()
    const date2 = ref<any>()
    const date3 = ref<any>()
    const date4 = ref<any>()
    const date5 = ref<any>()
    const time = ref<string>()
    const image = ref<string>()
    const describe = ref<string>()

    onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date1.value = [startDate, endDate];
    })


  
    const create=()=>{
      if(!title.value || tag.value || date1.value || time.value || image.value||describe.value)
      try {
        console.log("起動");
        const  docRef = addDoc(collection(db, "users"), {
          title: title.value,
          tag: tag.value,
          date1: date1.value,
          time: time.value,
          image: image.value,
          describe: describe.value
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
    date1,
    date2,
    date3,
    date4,
    date5,
    time,
    image,
    describe
  }
  }
})
</script>
<style>
.title{
    text-align: center;
}
</style>