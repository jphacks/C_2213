<template>
  <div class="grid">
    <Sidebar></Sidebar>
    <div></div> 
    <div class="home-container">
      <!-- <div class="search">
        <input type="text" v-model="textInput">
      </div> -->
      <div class="recruitment-list" >
        <div class="post recruitment-bg" v-for="post in posts" :key="post" >
          <div  >
            <div class="bl_article recruitment-title" style="background-image: {{post.data.filePath}}">
              <p @click="openModal(post.data)">タイトル：{{ post.data.title }}</p>
              <!-- 画像:<img :src=post.data.filePath> -->
            </div>
          </div>
        </div>
    </div>


    <HomeModal  :title="postItem.title" :docId="postItem.key" :username="postItem.usename" :description="postItem.description" :showContent="showContent" @emitTest="testFn"/>
  </div>
</div>
</template>

<script lang="ts">
import Sidebar from '../components/Sidebar.vue'
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
    Sidebar
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

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 15% 85%;
}

.post{
  border: aqua solid 1px;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search input{
  width: 30rem;
  height: 2rem;
  margin: 2rem;
  background: #F3F3F3;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.recruitment-list{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  position: relative;
  top: 10%;
}
.recruitment-bg{
    border-radius: 5px;
    margin: 1.3rem;
    box-shadow: 0 0 8px gray;
    height: 10rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.recruitment-bg img {
  width: 100%;
  height: 100%;
}
</style>