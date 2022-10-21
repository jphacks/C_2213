<template>
  <div>
    <div class="search">
         <h1>ホーム画面</h1>
        <input type="text" v-model="textInput">
        <p>{{showContent}}</p>
    </div>
    <!-- <div class="recruitment-list" >
        <div class="recruitment-bg" @click="openModal">
            <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
        </div>
    </div> -->
    <div class="post" v-for="post in posts" :key="post" >
      <div  >
        <div class="bl_article" >
          <p @click="openModal(post.data)">タイトル：{{ post.data.title }}</p>
           画像:<img :src=post.filePath>
        </div>
        <!-- <div v-if="showContent==true"> -->
        <!-- </div> -->
      </div>
    </div>
    <HomeModal  :title="postItem.title" :docId="postItem.key" :username="postItem.usename" :description="postItem.description" :showContent="showContent" @emitTest="testFn"/>
    
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
    const showContent = ref<boolean>(false);
    const textInput = ref('');
    const router = useRouter()
    const posts = ref()
    const postList =<any>[];
    let postItem = ref({})

    const testFn = (param:any)=>{
      showContent.value= param
      console.log(showContent.value)
    } 
    
    //firebaseからpostを取得
    const fetchFirebase=async()=>{
      const data:Array<any>=[]
      const querySnapshot = await getDocs(collection(getFirestore(),"post"))
      querySnapshot.forEach((doc)=>{
        postList.push({
          key: doc.id,
          data:doc.data(),
        })
      })
      console.log(postList)
      return postList
    }

    //postsにfirebaseから募集一覧を格納
    onMounted(()=>{
      fetchFirebase().then((data)=>{
        posts.value =data
        console.log(posts.value)
      })
    })

    const openModal=(post:any) => {
      postItem.value = {
        title: post.title,
        key: post.key,
        usename: post.username,
        description: post.discription,
      }
      showContent.value=true
      console.log(post)
      console.log(postItem)
      console.log("押しました")
      console.log(showContent.value)
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        router.push('/top')
      }
    })

    return {  fetchFirebase,textInput,showContent,posts,openModal,postItem,testFn };
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