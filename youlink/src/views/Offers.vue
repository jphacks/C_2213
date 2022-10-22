<template>
  <div class="offer-scene">
    <Sidebar></Sidebar>
    <div class="offer-main">
      <div class="offer-title">
        <h1>JPHACKS登壇者語りませんか？</h1>
      </div>
      <div class="offer-inputarea">
        <div class="offer-element offer-inputarea-left">
          <div class="offer-inputarea-left-date">
            <p class="offer-title">日程</p>
          </div>
          <Datepicker range />
          <!-- <div class="offer-inputarea-left-date">
            <p class="offer-title"></p>
          </div> -->
        </div>

        <div class="offer-element offer-inputarea-right">
          <p class="offer-title">ひとこと</p>
          <hr>
          <v-text-field
              class="offer-description"
              color="#2FDCE7"
              variant="outlined"
              hide-details
              append-icon="mdi-send"
              @click:append="apply"
              v-model="message"
          >
          </v-text-field>
        </div>
      </div>
      <button class="offer-btn" @click="apply">応募</button>
      <!-- <v-btn class="offer-btn" variant="outlined" @click="apply" >応募</v-btn> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted} from 'vue'
import { useRoute  } from 'vue-router'
import { getFirestore, addDoc,collection,serverTimestamp, getDocs,query,where,setDoc, doc } from '@firebase/firestore'
import {auth,db} from '../FirebaseConfig'
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'

  const posts = ref()
  const postList =<any>[];

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

const user = auth.currentUser
const router = useRouter()

const message = ref('')

const apply = async () => {
  // console.log("応募しました");
  try {
    const newDoc = doc(collection(db, "rooms")).id;
    await setDoc(doc(db, "rooms", newDoc), {
      room_id: newDoc,
      title: "JPHACKS登壇者語りませんか？",
      // owner_id: user.uid,
      created_at: serverTimestamp(),
      zoom_url: "",
    });
    await addDoc(collection(db, "rooms", newDoc, "chats"), {
      text: message.value,
      displayName: user.displayName,
      created_at: serverTimestamp(),
      uid: user.uid,
      
    });
    await addDoc(collection(db, "rooms", newDoc, "users"), {
      uid: user.uid,
      displayName: user.displayName,
    });
    await setDoc(doc(db, "users", user.uid, "room", newDoc), {
      room_id: newDoc,
      title: "JPHACKS登壇者語りませんか？",
      Exist_room: true,
      comment:"初めましてよろしくお願いします"
    });
    router.push({ name: 'directmessage', params: { id:newDoc} });
    } catch (error) {
        console.log(error);
    }
}

</script>

<style lang="scss">
$main-color: #2FDCE7;

.offer-scene {
  background-color: #F2F2F2;
  height: 100vh;
}

.offer-main {
  position: relative;
  left: 10%;
}

.title{
    text-align: center;
}
.offer-inputarea{
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  top: 5rem;
}

.offer-element {
  width: 40%;
}

.offer-element {
  background-color: #FFFFFF;
  margin: 2rem;
  border-radius: 7px;
  height: 20rem;
}

.offer-title {
  color: $main-color;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
}

.offer-btn {
  width: 15rem;
  height: 3rem;
  background-color: $main-color;
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  position: fixed;
  bottom: 10%;
  left: 47%;
}

.offer-description {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>