<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import { getDownloadURL } from "firebase/storage"
import { storage, setImagePath } from '../FirebaseConfig'
import { ref } from 'vue'


let user_icon = ref('')

const getUserIcon = async () => {
  getDownloadURL(setImagePath('gs://youlink-bf71e.appspot.com/default_icon.png'))
  .then(url => {
    console.log(url)
    user_icon.value = url
    console.log(user_icon)
  })
  .catch(err => console.log(err))
}

getUserIcon()
</script>
<template>
  <div class="notification-scene">
    <Sidebar></Sidebar>
    <div class="notification-box-container">
      <p>{{user_icon}}</p>
      <div class="notification-box">
        <div class="notification-box-elements notification-box-left"><img src="require(user_icon)"></div>
        <div></div>
        <div class="notification-box-elements notification-box-right">〇〇さんから、話したいと応募がきました</div>
      </div>
      <div class="notification-box">
        <div class="notification-box-elements notification-box-left">icon</div>
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
  height: 2rem;
  width: 40rem;
}

.notification-box-elements {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>