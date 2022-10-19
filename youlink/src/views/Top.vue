<script setup lang="ts">

</script>

<template>
    <div id="top-scene">
        <div class="top-element"></div>
        <div class="title">
            <h1>YOULINK</h1>
        </div>
        <div class="router-container">
            <RouterLink to="/signin" class="router-link"><button class="router-btn signin-btn">ログイン</button></RouterLink>
            <RouterLink to="/signup" class="router-link"><button class="router-btn signup-btn">新規登録</button></RouterLink>
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

.title {
    color: $main-color;
    font-size: 2rem;
}

.router-link {
    text-decoration: none;
}

.router-container {
    display: flex;
    flex-direction: column;
}

.router-container {
    display: flex;
    align-items: center;
}

.router-btn {
    margin: 1rem;
    width: 18rem;
    height: 2.5rem;
    border-radius: 10px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.signin-btn {
    color: #FFFFFF;
    background-color: $main-color;
    border: $main-color 2px solid;
}

.signup-btn {
    color: $main-color;
    background-color: #FFFFFF;
    border: $main-color 2px solid;
}
</style>