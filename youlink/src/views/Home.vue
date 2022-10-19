<template>
  <div>
    <div class="search">
         <h1>ホーム画面</h1>
        <input type="text" v-model="textInput">
        <p>{{textInput}}</p>
    </div>
    <!-- <div class="recruitment-list" >
        <div class="recruitment-bg" @click="openModal">
            <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
        </div>
    </div> -->
    <div class="post" v-for="post in posts" :key="post" @click="openModal">
      <div class="bl_article">タイトル：{{ post.title }}</div>
      <div class="bl_article">画像:<img :src=post.filePath></div>
    </div>
    
    <HomeModal v-if="showContent"/>
  </div>
</template>

<script lang="ts">
import HomeModal from '../components/HomeModal.vue'
import { ref, onMounted } from 'vue'
import { getUser } from '../stores/auth'
import { useRouter } from 'vue-router'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../FirebaseConfig'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs } from '@firebase/firestore'


export default ({
  components: {
    HomeModal,
  },
  setup() {
    //モーダルクリックチェック
    let showContent = ref(false);
    const textInput = ref('');
    const router = useRouter()
    const posts = ref()

    //firebaseからpostを取得
    const fetchFirebase=async()=>{
      const data:Array<any>=[]
      const querySnapshot = await getDocs(collection(getFirestore(),"post"))
      querySnapshot.forEach((doc)=>{
        data.push(doc.data())
      })
      return data
    }

    //postsに追加
    onMounted(()=>{
      fetchFirebase().then((data)=>{
        posts.value =data
        console.log(posts.value)
      })
    })

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        router.push('/top')
      }
    })
    
    let openModal = () => {
      showContent.value = true;
    };

    return {  fetchFirebase,textInput,showContent, openModal,posts };
  },
});
</script>

<style>
.search{
    text-align: center;
}

.post{
  border: aqua solid 1px;

}
.recruitment-bg{
    border: solid 2px;
    width:20%;
    margin:10px 10px 10px 10px;
}

</style>