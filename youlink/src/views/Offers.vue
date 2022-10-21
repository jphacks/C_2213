<template>
  <div >
    <Sidebar></Sidebar>
    <div class="title">
     <h1>JPHACKS登壇者語りませんか？</h1>
    </div>
    <div class="offer-inputarea">
      <div class="offer-inputarea-left">
        <div class="offer-inputarea-left-date">
          日程:
        </div>
        <Datepicker v-model="date" :allowedDates="allowedDates"></Datepicker>
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
import {ref,onMounted,computed} from 'vue'
import { useRoute } from 'vue-router'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs,query,where, Timestamp } from '@firebase/firestore'
import {auth,db} from '../FirebaseConfig'
import Datepicker from '@vuepic/vue-datepicker';
import Sidebar from '../components/Sidebar.vue'

export default ({
  setup() {
    const message=ref('')
    const posts = ref()
    const postList =<any>[];
    const date = ref(new Date());
    const timestamp = {seconds: 1618730280, nanoseconds: 0}

    const allowedDates = computed(() => {
      return [
        new Date(),
        new Date(new Date().setDate(new Date().getDate() + 1))
      ];
    });
    const alertFn = () => {
          alert('Input focus');
        }
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

    return { message, date, allowedDates, alertFn }
    },
    components: {
      Datepicker,
      Sidebar
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