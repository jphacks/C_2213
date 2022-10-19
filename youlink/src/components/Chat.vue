<template>
    <div ref="chatsRef">
        <h1 class="text-center">Chats</h1>
        <v-card
            v-for="item of messages"
            :key="item.id"
            :subtitle="item.displayName"
            :text="item.text"
            :class="item.uid === userChat.uid && 'ml-auto'"
            :color="item.uid === userChat.uid ? 'success' : '#555'"
        ></v-card>
    </div>
</template>

<script setup >
import { ref, watch, watchEffect } from "vue";
import { auth, db } from "../FirebaseConfig";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const userChat = ref(auth.currentUser);

const messages = ref([]);
const chatsRef = ref(null);

const q = query(collection(db, "chats"), orderBy("created_at"));
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
