<template>
    <v-form class="w-100" color="#2FDCE7" @submit.prevent="sendMessage">
        <v-text-field
            color="#2FDCE7"
            label="メッセージを入力してください"
            variant="outlined"
            hide-details
            append-icon="mdi-send"
            @click:append="sendMessage"
            v-model="message"
        >
        </v-text-field>
        <v-btn variant="outlined" @click="sendMessage" v-model="message" >送信</v-btn>
    </v-form>
</template>

<script setup lang="ts">
import { addDoc, collection, doc, serverTimestamp } from "@firebase/firestore";
import { auth, db } from "../FirebaseConfig";
import { ref ,watch, watchEffect } from "vue";
import { useRoute } from "vue-router";


const message = ref("");
const route = useRoute();


const room_id = route.params.id;

const sendMessage = async () => {
    console.log(message.value);
    try {
        await addDoc(collection(db, "chats"), {
            text: message.value,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            created_at: serverTimestamp(),
        });
        await addDoc(collection(db, "rooms",room_id,"chats"), {
            text: message.value,
            created_at: serverTimestamp(),
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
        });

        message.value = "";
    } catch (error) {
        console.log(error);
    }
};
</script>
