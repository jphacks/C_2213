<template>
  <div >
    <div class="title">
     <h1>JPHACKS登壇者語りませんか？</h1>
    </div>
    <div class="offer-inputarea">
      <div class="offer-inputarea-left">
        <div class="offer-inputarea-left-date">
          日程:
        </div>
        <div class="offer-inputarea-left-date">
          時刻:
        </div>
      </div>

      <div class="offer-inputarea-right">
        <p>ひとこと</p>
        <hr>
        <v-text-field
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
    <v-btn variant="outlined" @click="apply" >応募</v-btn>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { addDoc,setDoc, collection, doc, serverTimestamp } from "@firebase/firestore";
import { auth,db } from "../FirebaseConfig";
import { useRouter } from 'vue-router'

const user = auth.currentUser
const router = useRouter()

const message = ref('')

const apply = async () => {
  // console.log("応募しました");
  try {
    const newDoc = doc(collection(db, "rooms")).id;
    await setDoc(doc(db, "rooms", newDoc), {
      room_id: newDoc,
      title: "",
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
      title: "",
      Exist_room: true,
    });
    router.push({ name: 'directmessage', params: { id:newDoc} });
    } catch (error) {
        console.log(error);
    }
}
</script>

<style>
.title{
    text-align: center;
}
.offer-input-area{
  display: flex;
}
</style>