<template>
    <div class="sidebar">
        <div class="top-element">
            <RouterLink to="/"><img src="../assets/home_icon.png"></RouterLink>
            <RouterLink to="/messages"><img src="../assets/message_icon.png"></RouterLink>
            <RouterLink to="/notification"><img src="../assets/notification_icon.png"></RouterLink>
            <RouterLink to="/post"><img src="../assets/post_icon.png"></RouterLink>
        </div>
        <div class="bottom-element">
            <RouterLink to="/users">
                <div class="user-icon">a</div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
$main-color: #2FDCE7;

.sidebar {
    position: fixed;
    background-color: $main-color;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.top-element {
    display: flex;
    flex-direction: column;
}

.top-element img {
    margin: 1rem;
    position: relative;
    left: 1rem;
}

.bottom-element {
    position: absolute;
    bottom: 0;
}

.user-icon {
    widows: 30px;
    background-color: #FFFFFF;
}
</style>