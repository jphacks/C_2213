<template>
  <div >
    <div class="title">
     <h1>JPHACKS登壇者語りませんか？</h1>
    </div>
    <div class="offer-inputarea">
      <div class="offer-inputarea-left">
        <div class="offer-inputarea-left-date">
          日程:
        </div>
        <div class="offer-inputarea-left-date">
          時刻:
        </div>
      </div>

      <div class="offer-inputarea-right">
        <p>ひとこと</p>
        <hr>
        <textarea name="" v-model="message"></textarea>
      </div>
    </div>
    <button>応募</button>

  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
export default ({
  setup() {
    const message=ref('')

    return { message };
  },
});

</script>
<style>
.title{
    text-align: center;
}
.offer-input-area{
  display: flex;
}
</style>