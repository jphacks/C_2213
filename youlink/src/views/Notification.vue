<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import { getDownloadURL } from "firebase/storage"
import { storage, setImagePath } from '../FirebaseConfig'
import { ref } from 'vue'


let user_icon = 'https://firebasestorage.googleapis.com/v0/b/youlink-bf71e.appspot.com/o/user_default_icon.png?alt=media&token=39be9a7b-26b9-43d4-a145-d6fbe4bba4ea'

</script>
<template>
  <div class="notification-scene">
    <Sidebar></Sidebar>
    <div class="notification-box-container">
      <div class="notification-box">
        <div class="notification-box-elements notification-box-left"><img :src="`${user_icon}`"></div>
        <div></div>
        <div class="notification-box-elements notification-box-right">〇〇さんから、話したいと応募がきました</div>
      </div>
      <div class="notification-box">
        <div class="notification-box-elements notification-box-left"><img :src="`${user_icon}`"></div>
        <div></div>
        <div class="notification-box-elements notification-box-right">〇〇さんから、話したいと応募がきました</div>
      </div>
    </div>

  </div>

</template>
<style lang="scss">
.notification-scene {
  position: absolute;
}

.notification-box-container {
  position: relative;
  left: 15vw;
  display: flex;
  flex-direction: column;
}

.notification-box {
  display: grid;
  grid-template-columns: 10% 10% 80%;

  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 1rem;
  padding: 10px;
  height: 100%;
  width: 40rem;
}

.notification-box-elements {
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-box-left img {
  width: 100%;
}
</style>