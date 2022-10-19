<template>
    <v-form  @submit.prevent="sendMessage">
        <v-text-field
            color="success"
            label="入力してください"
            variant="outlined"
            hide-details
            append-icon=""
            @click:append="sendMessage"
            v-model="message"
        >
        </v-text-field>
    </v-form>
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
