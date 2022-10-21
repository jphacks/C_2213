<script setup lang="ts">

</script>

<template>
    <div id="top-scene">
        <div class="top-element"></div>
        <div class="top-title">
            <h1>YOULINK</h1>
        </div>
        <div class="top-router-container">
            <RouterLink to="/signin" class="top-router-link"><button class="top-router-btn top-signin-btn">ログイン</button></RouterLink>
            <RouterLink to="/signup" class="top-router-link"><button class="top-router-btn top-signup-btn">新規登録</button></RouterLink>
        </div>
    </div>

</template>

<style lang="scss">
$main-color: #2FDCE7;

#top-scene {
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 40% 30%;
}

.top-element {
    width: 100vw;
    height: 8vh;
    background-color: $main-color;
}

.top-title {
    color: $main-color;
    font-size: 2rem;
    text-align: center;
}

.top-router-link {
    text-decoration: none;
}

.top-router-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top-router-btn {
    margin: 1rem;
    width: 18rem;
    height: 2.5rem;
    border-radius: 10px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-signin-btn {
    color: #FFFFFF;
    background-color: $main-color;
    border: $main-color 2px solid;
}

.top-signup-btn {
    color: $main-color;
    background-color: #FFFFFF;
    border: $main-color 2px solid;
}
</style>