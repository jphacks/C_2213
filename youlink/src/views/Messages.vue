<template>
  <div class="title">
    <h1>メッセージ画面</h1>
    <div class="post" v-for="message in messages" :key="message" >
      <div  >
        <div class="bl_article" @click="moveDirectMessage( message.key)">
          <p >タイトル：{{ message.key }}</p>
        </div>
        <!-- <div v-if="showContent==true"> -->
        <!-- </div> -->
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted } from 'vue'
import {useRouter} from 'vue-router'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs,where,query } from '@firebase/firestore'
import {auth,db} from '../FirebaseConfig'

export default defineComponent({
    setup() {
        const messages = ref()
        const messageList =<any>[];
        const router = useRouter()

        const moveDirectMessage = (roomId:string)=> {
            router.push('/directmessage/'+ roomId)
        }

        const fetchFirebase=async()=>{
            const userid =auth.currentUser!.uid
            const usersCollectionRef=collection(db,"users",userid,"room")
            const querySnapshot = await getDocs(usersCollectionRef)
            querySnapshot.forEach((doc)=>{
                messageList.push({
                    key: doc.id,
                    data:doc.data(),
                })
            })
        
            console.log(messageList)
            return messageList
        }

        //postsにfirebaseから募集一覧を格納
        onMounted(()=>{
            fetchFirebase().then((data)=>{
                messages.value =data
                console.log(messages.value)
             })
        }) 

        return {
            moveDirectMessage,fetchFirebase,messageList,messages
        }
    },
})
</script>

<style>
.title{
    text-align: center;
}
</style>