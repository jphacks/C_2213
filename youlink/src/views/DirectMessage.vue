<template>
    <div>
        <!-- header -->
        <div>
            <h1>チャットルーム</h1>
        </div>
        
        <!-- body -->
        <div v-if="user !== undefined">
            <div>
                <Chat v-if="user" />
                <div v-else>
                    <h1>
                    セッションタイムアウト  
                    </h1>
                </div>
            </div>
        </div>
        <!-- footer -->
        <div class="d-flex flex-column" app v-if="user">
            <Form />
        </div>
    </div>
</template>

<script setup >
import { ref } from "vue";
import  Chat  from "../components/Chat.vue";
import  Form  from "../components/Form.vue";
import { getUser } from "../stores/auth";

const user = ref(getUser());

</script>
