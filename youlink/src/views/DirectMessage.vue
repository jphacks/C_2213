<template>
    <v-app>
        <v-main app v-if="user !== false">
            <Sidebar/>
            <v-container>
                <Chat v-if="user" />
                <div v-else>
                    <h1 class="text-center mt-15">
                    セッション切れです。再度ログインしてください。
                    </h1>
                </div>
            </v-container>
        </v-main>

        <v-footer class="d-flex flex-column" app v-if="user">
            <Form />
        </v-footer>
    </v-app>
</template>

<script setup >
import { ref } from "vue";
import  Chat  from "../components/Chat.vue";
import  Form  from "../components/Form.vue";
import { getUser } from "../stores/auth";
import Sidebar from "../components/Sidebar.vue"

const user = ref(getUser());

</script>
