<template>
  <div class="post-scene">
    <Sidebar></Sidebar>
    <div class="post-main-container">
      <div class="post-top-element">
        <div class="post-container post-title-container">
          <p class="post-title post-title-title">タイトル</p>
          <input class="post-input post-title-input" type="text" v-model="title"><br/>
        </div>
        <div class="post-container post-tag-container">
          <p  class="post-title">タグ</p>
          <input class="post-input" type="text" v-model="tag"><br/>
        </div>
      </div>

      <div class="post-bottom-container">
        <div class="post-bottom-left-container">
          <div class="post-container post-date-container">
            <p class="post-title">日時</p>
            <Datepicker v-model="date1" range calendarWidth:100px />
            <Datepicker v-model="date2" range />
            <Datepicker v-model="date3" range />
            <Datepicker v-model="date4" range />
            <Datepicker v-model="date5" range />
          </div>
          <div class="post-container post-img-container">
            <p class="post-title">画像</p>
            <input class="post-input" type="file" accept="image/jpeg,image/png,image/gif" @change="uploadFile"> <br/>
          </div>
        </div>
        <div class="post-bottom-right-container">
          <div class="post-container post-description-container">
            <p class="post-title">ひとこと</p>
            <input class="post-input" type="text" v-model="describe"><br/>
          </div>
          <div>
            <button class="post-add-btn" @click="create">登録</button>
          </div>
        </div>

      </div>
    </div>
    
  </div>

</template>

<script lang="ts">
import {defineComponent,ref as vueRef,onMounted} from 'vue'
import { getFirestore,addDoc,collection,serverTimestamp, getDocs,setDoc,doc ,query,where} from 'firebase/firestore'
import { getDownloadURL, ref ,getStorage, uploadBytesResumable } from "firebase/storage";
import {db,auth}from '../FirebaseConfig'
import {getUser} from '../stores/auth'
import Sidebar from '../components/Sidebar.vue'

export default defineComponent({
  components: {
    Sidebar
  },
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
    const postList =<any>[];
    
    onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date1.value = [startDate, endDate];
    })

    const uploadFile = (event:any)=>{
      fileData.value = event.target.files[0]
    }

    // const getUserName=()=>{
    //   const uid= auth.currentUser?.uid
    //   const data:Array<any>=[]
    //   const querySnapshot = getDocs(collection(getFirestore(), 'users'));
    //   querySnapshot.forEach((doc:any)=>{
    //     postList.push({
    //       key: doc.id,
    //       data:doc.data(),
    //     })
    //   })
    //   console.log(querySnapshot)
    // }

    // const getUserName=async()=>{
    //   const docRef =collection(db,"users",`${auth.currentUser?.uid}`)
    //     console.log(user)
    // }

    //投稿時の発火
    const create=()=>{
      try {
        const metadata={ contentType: 'image/jpeg',}
        const storage =getStorage();
        const imageRef=ref(storage,'/'+ title.value);
        
      uploadBytesResumable(imageRef, fileData.value, metadata).then((snapshot)=>{
            //画像の取得
            getDownloadURL(snapshot.ref).then((url)=>{
            const usersRef =collection(db,"users")
            //usernameの取得
            getDocs(query(usersRef, where("id", "==", auth.currentUser?.uid))).then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.data().icon);
              //firebaseに追加
              addDoc(collection(db, "post"), {
                title: title.value,
                schedule: date1.value,
                description: describe.value,
                filePath : url,
                created_at: serverTimestamp(),
                tag: tag.value,
                postId:doc.id,
                username:doc.data().username,
                icon:doc.data().icon
              })
            })
            })
          })
        console.log(6)
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
<style scoped lang="scss">
$main-color: #2FDCE7;

.post-scene {
  background-color: #F2F2F2;
  width: 100%;
  height: 100vh;
}

.post-main-container {
  position: relative;
  left: 10%;
}

.post-top-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}

.post-container {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 1rem;
  // width: 50rem;
  // margin: 1rem;
}
.post-title-container {
  width: 100%;
  margin-top: 2rem;
}

.post-tag-container {
  width: 100%;
  margin-top: 2rem;
}

.post-title {
  color: $main-color;
  font-size: 1.4rem;
  font-weight: bold;
}

.post-input {
  position: relative;
  left: 3%;
  width: 90%;
  border-bottom: 2px solid $main-color;
}

.post-bottom-container {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  width: 100%;
  display: flex;
}

.post-bottom-right-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-date-container {
  margin-bottom: 2rem;
}

.post-description-container {
  width: 80%;
  margin-bottom: 5rem;
}
.post-add-btn {
  color: #FFFFFF;
  background-color: $main-color;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.3rem;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
  width: 10rem;
  height: 2.5rem;
}
</style>