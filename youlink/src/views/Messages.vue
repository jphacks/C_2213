<template>
<Sidebar/>
  <div class="message-list">
    <div class="message-container" v-for="message in messages" :key="message" >
        <div class="message-title" @click="moveDirectMessage( message.key)">
          <p >{{ message.data.title }}</p>
        </div>
        <img src="../assets/computer_programming_man.png" class="message-usericon">
        <div class="message-comment">
            <p  class="message-comment-text">{{ message.data.comment }}</p>
        </div>
    </div>

  </div>
</template>

<style>
.message-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 13%;
}
.message-container{
    width:25%;
    height:200px;
    border-radius: 10px;
    margin-top: 50px;
    box-shadow: 0 0 8px rgba(201, 201, 201, 0.767);
    margin-right: 8%;
}
.message-title{
    padding-top: 12px;
    border-radius: 10px 10px 1px 1px;
    background-color: aqua;
    height: 50px;
    text-align: center;
    color: white;
    font-weight: 900;
}
.message-usericon{
    height: 40px;
    width: 40px;
    border-radius: 50%; 
    margin-left: 5%;
    margin-top: 3%;
}
.message-comment{
    width:90%;
    height:80px;
    border: 2px solid aqua;
    margin-left: 15px;
    margin-top: 5px;
    border-radius:5px;
}
.message-comment-text{
    font-size: 12px;
    margin-top: 5px;
    margin-left: 5px;
}
</style>

<script lang="ts">
import { defineComponent,ref,onMounted } from 'vue'
import {useRouter} from 'vue-router'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs,where,query } from '@firebase/firestore'
import {auth,db} from '../FirebaseConfig'
import Sidebar from '../components/Sidebar.vue'

export default defineComponent({
    components:{
        Sidebar
    },
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

