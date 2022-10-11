<template>
    <div>
        <h1>JPHACKS登壇者語りませんか？</h1>
        <p>初めまして。名城大学のせーと申します。今年度のJPHACKSに参加しましたが、他のグループのエンジニアの方とお話しする機会がなかったので、
YOULINKで募集させていただきました。</p>
        <button @click="moveOffer">話したい</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const moveOffer=()=>{
            router.push('/offers')
        }
        return {
            moveOffer
        }
    }
}
</script>

<style>

</style>