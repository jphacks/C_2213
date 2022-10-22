<script setup lang="ts">
import { auth } from '@/FirebaseConfig';
import { useRouter } from 'vue-router';
import { logOut } from '../stores/auth'



const router = useRouter()
const toUserScene = () => {
    const uid = auth.currentUser?.uid
    const url = '/users/' + uid
    router.push(url)
}
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-top-element">
            <RouterLink to="/"><img src="../assets/home_icon.png"></RouterLink>
            <RouterLink to="/messages"><img src="../assets/message_icon.png"></RouterLink>
            <RouterLink to="/notification"><img src="../assets/notification_icon.png"></RouterLink>
            <RouterLink to="/post"><img src="../assets/post_icon.png"></RouterLink>
        </div>
        <div class="sidebar-bottom-element">
            <!-- <RouterLink v-bind:to="{
                name: 'users',
                params: {id: uid}
            }"> -->
            <div class="sidebar-user-icon" @click="toUserScene"><img src="../assets/computer_programming_man.png"></div>
            <!-- </RouterLink> -->
            <!-- <button @click="logOut">ログアウト</button> -->
        </div>
    </div>
</template>

<style lang="scss">
$main-color: #2FDCE7;

.sidebar {
    position: fixed;
    background-color: $main-color;
    height: 100vh;
    width: 6rem;
    display: flex;
    flex-direction: column;
}

.sidebar-top-element {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebar-top-element img {
    margin: 1rem;
    position: relative;
    width: 3rem;
}

.sidebar-bottom-element {
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.sidebar-user-icon img{
    width: 4rem;
    height: 4rem;
    background-color: #FFFFFF;
    border-radius: 50%;
}
</style>