<template>
  <div class="title">
    <Sidebar></Sidebar>
    <h1>新規募集画面</h1>
    <div>
      タイトル<input type="text" v-model="title"><br/>
    </div>
    <div>
      タグ<input type="text" v-model="tag"><br/>
    </div>
    <div>
      <Datepicker v-model="date1" range maxRange="1"/>
      <Datepicker v-model="date2" range maxRange="1"/>
      <Datepicker v-model="date3" range maxRange="1"/>
      <Datepicker v-model="date4" range maxRange="1"/>
      <Datepicker v-model="date5" range maxRange="1"/>
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
    const date1 = vueRef<Date>()
    const date2 = vueRef<Date>()
    const date3 = vueRef<Date>()
    const date4 = vueRef<Date>()
    const date5 = vueRef<Date>()
    const describe = vueRef<string>()
    const fileData =vueRef<any>()
    const postList =<any>[];
    
    onMounted(() => {
            const startDate = new Date();
            // const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date1.value = [startDate];
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
    const newDoc = doc(collection(db, "post")).id;
    const addNewdoc = doc(db, "post",newDoc);
    //投稿時の発火
    const create=()=>{
      try {
        const metadata={ contentType: 'image/jpeg',}
        const storage =getStorage();
        const imageRef=ref(storage,'/'+ title.value);
        
      uploadBytesResumable(imageRef, fileData.value, metadata).then((snapshot)=>{
          //画像の取得
          console.log(1)
             getDownloadURL(snapshot.ref).then((url)=>{
            console.log(2)
            const usersRef =collection(db,"users")
            //usernameの取得
            getDocs(query(usersRef, where("id", "==", auth.currentUser?.uid))).then(snapshot => {
              console.log(3)
            snapshot.forEach(doc => {
              console.log(4)
              console.log(doc.data().icon);
              //firebaseに追加
              setDoc(addNewdoc, {
                title: title.value,
                schedule: date1.value,
                description: describe.value,
                filePath : url,
                created_at: serverTimestamp(),
                tag: tag.value,
                postId: newDoc,
                userId: doc.id,
                username:doc.data().username,
                icon:doc.data().icon
            })
            console.log(5)

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
<style>
.title{
    text-align: center;
}
</style>