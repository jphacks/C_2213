<template>
  <div>
    <div class="search">
         <h1>ホーム画面</h1>
        <input type="text" v-model="textInput">
        {{textInput}}
    </div>
    <div class="recruitment-list" >
        <div class="recruitment-bg" @click="openModal">
            <h1 class="recruitment-title">JPHACKS登壇者語りませんか？</h1>
        </div>
    </div>
    <HomeModal v-if="showContent"/>
    <!-- <div v-if="showContent">
        <h1>JPHACKS登壇者語りませんか？</h1>
        <p>初めまして。名城大学のせーと申します。今年度のJPHACKSに参加しましたが、他のグループのエンジニアの方とお話しする機会がなかったので、
YOULINKで募集させていただきました。</p>
        <button @click="moveOffer">話したい</button>
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import HomeModal from '../components/HomeModal.vue'

export default ({
  components: {
    HomeModal,
  },
  setup() {
    //モーダルクリックチェック
    let showContent = ref(false);
    const textInput = ref('');

    let openModal = () => {
      showContent.value = true;
    };

    return { textInput,showContent, openModal };
  },
});
</script>

<style>
.search{
    text-align: center;
}

.recruitment-list{

}
.recruitment-bg{
    border: solid 2px;
    width:20%;
    margin:10px 10px 10px 10px;
}

</style>