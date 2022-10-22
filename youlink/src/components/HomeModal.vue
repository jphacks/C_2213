<template>
    <div v-if="showContent==true" id="overlay" >
        <div class="delete-modal" >
            <div class="homemodal-top-element">
                <p class="homemodal-title">{{title}}</p>
            </div>
            <div class="homemodal-bottom-element">
                <p>ユーザー名：{{username}}</p>
                <div class="homemodal-description-container">
                    <p class="homemodal-description-title">ひとこと</p>
                    <p>{{description}}</p>
                </div>
            </div>
            <div class="homemodal-btn-container">
                <button class="homemodal-btn homemodal-back-btn" @click="modalClose">戻る</button>
                <button class="homemodal-btn homemodal-talk-btn" @click="moveOffer">話したい</button>
            </div>
        </div>
    </div>
    <!-- <div v-if="showContent==true" >
        <div >
            <h1>{{ msg }}</h1>
            <button @click="moveOffer">話したい</button>
        </div>
    </div> -->
</template>

<script lang="ts">
import {useRouter} from 'vue-router'
import { defineComponent} from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
        },
        description:{
            type: String
        },
        username:{
            type: String
        },
        docId:{
            type: String
        },
        showContent:{
            type: Boolean 
        },
    },
    emits: ['emitTest'],
    setup(props,context){
        const router = useRouter()
        const moveOffer=()=>{
            router.push('/offers/'+props.docId)
        }
        const modalClose=()=>{
            // props.showContent = false;
            // console.log(props.showContent)
            context.emit('emitTest', false)
        }
        return {
            moveOffer,modalClose
        }
    }
})
</script>

<style lang="scss">
$main-color: #2FDCE7;

#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.delete-modal {
  z-index: 2;
  width: 50%;
  background-color: #FFFFFF;
  font-size: 16px;
  width: 40rem;
  height: 30rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.homemodal-bottom-element {
    width: 80%;
}

.homemodal-description-container {
    background-color: #F5F5F5;
    position: relative;
    width: 100%;
    height: 10rem;
    padding: 10px;
    border-radius: 15px;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.homemodal-description-title {
    color: $main-color;
    font-size: 1.3rem;
    font-weight: bold;
}

.homemodal-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.homemodal-btn-container {
    display: flex;
    flex-direction: row;
}

.homemodal-btn {
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
    border-radius:10px;
    padding: 5px;
    margin: 10px;
    width: 7rem;
    height: 2.5rem;
    font-size: 1.3rem;
    font-weight: bold;
}

.homemodal-talk-btn {
    color: #FFFFFF;
    background-color: $main-color;
}

.homemodal-back-btn {
    border: solid 1px $main-color;
    color: $main-color;

}
</style>