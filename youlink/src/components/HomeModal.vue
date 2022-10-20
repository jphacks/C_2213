<template>
    <div v-if="showContent==true" id="overlay" >
        <div class="delete-modal" >
            <p>タイトル：{{title}}</p>
            {{showContent }}
            <button @click="moveOffer">話したい</button>
            <button @click="modalClose">戻る</button>
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
        showContent:{
            type: Boolean 
        },
    },
    emits: ['emitTest'],
    setup(props,context){
        const router = useRouter()
        const moveOffer=()=>{
            router.push('/offers')
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

<style>
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
  background: #fff;
  font-size: 16px;
  width: 202px;
  height: 199px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #b1b1b1;
  border-radius: 8px;
}

</style>