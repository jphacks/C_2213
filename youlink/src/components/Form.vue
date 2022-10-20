<template>
    <form  @submit.prevent="sendMessage">
        <textarea
            label="入力してください"
            hide-details
            v-model="message"
        >
        </textarea>
        <input type="submit" @click="sendMessage" value="送信" />
    </form>
</template>

<script setup lang="ts">
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { auth, db } from "../FirebaseConfig";
import { ref } from "vue";

const message = ref("");

const sendMessage = async () => {
    console.log(message.value);
    try {
        await addDoc(collection(db, "chats"), {
            text: message.value,
            time: serverTimestamp(),
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
        });

        message.value = "";
    } catch (error) {
        console.log(error);
    }
};
</script>
