<template>
  <div class="title">
    <h1>メッセージ画面</h1>
    
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted } from 'vue'
import {useRouter} from 'vue-router'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs } from '@firebase/firestore'


export default defineComponent({
    setup() {
        const posts = ref()
        const postList =<any>[];
        const router = useRouter()

        const moveDirectMessage = ()=> {
            router.push('/directmessage')
        }

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

        return {
            moveDirectMessage
        }
    },
})
</script>

<style>
.title{
    text-align: center;
}
</style>