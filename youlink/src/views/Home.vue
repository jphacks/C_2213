<template>
  <div class="grid">
    <Sidebar></Sidebar>
    <div></div> 
    <div class="home-container">
      <div class="search">
        <input type="text" v-model="textInput">
        {{textInput}}
      </div>
    
      <div class="recruitment-list" >
          <div class="recruitment-bg" @click="openModal">
              <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
          </div>
          <div class="recruitment-bg" @click="openModal">
              <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
          </div>
          <div class="recruitment-bg" @click="openModal">
              <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
          </div>
      </div>
      <HomeModal v-if="showContent"/>
    </div>
  </div>

</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import HomeModal from '../components/HomeModal.vue'
import { ref, onMounted } from 'vue'
import { getUser } from '../stores/auth'
import { useRouter } from 'vue-router'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../FirebaseConfig'


export default ({
  components: {
    HomeModal,
    Sidebar
  },
  setup() {
    //モーダルクリックチェック
    let showContent = ref(false);
    const textInput = ref('');
    const router = useRouter()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        router.push('/top')
      }
    })
    
    let openModal = () => {
      showContent.value = true;
    };

    return { textInput,showContent, openModal };
  },
});
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 10% 90%;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search input{
  width: 30rem;
  height: 2rem;
  margin: 2rem;
  background: #F3F3F3;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.recruitment-list{
  display: grid;
  grid-template-columns: 30% 30% 30%;
}
.recruitment-bg{
    border: solid 2px;
    margin:10px 10px 10px 10px;
}

</style>