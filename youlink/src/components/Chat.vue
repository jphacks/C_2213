<template>
    <div ref="chatsRef">
        <h1 class="text-center">Chats</h1>
        <v-card
            v-for="item of messages"
            :key="item.id"
            width="300"
            class="mb-3"
            theme="dark"
            :subtitle="item.displayName"
            :text="item.text"
            :class="item.uid === userChat.uid && 'ml-auto'"
            :color="item.uid === userChat.uid ? '#2FDCE7' : '#2FDCE7'"
        ></v-card>
    </div>
</template>

<script setup >
import { ref, watch, watchEffect ,reactive } from "vue";
import { auth, db } from "../FirebaseConfig";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { useRoute } from "vue-router";

const userChat = ref(auth.currentUser);


const messages = ref([]);
const chatsRef = ref(null);
const route = useRoute();


const room_id = route.params.id;


const q = query(collection(db,"rooms",room_id,"chats"), orderBy("created_at"));
const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            // console.log("Message: ", change.doc.id, change.doc.data());
            messages.value.push({
                id: change.doc.id,
                ...change.doc.data(),
            });

            setTimeout(() => {
                if (chatsRef.value !== null) {
                    console.log(chatsRef.value.scrollHeight);
                    window.scrollTo(0, chatsRef.value.scrollHeight);
                }
            }, 60);
        }
    });
});


</script>
