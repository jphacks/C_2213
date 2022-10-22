<script setup lang="ts">
import { logOut } from '../stores/auth'
import { ref } from 'vue'
import { auth } from "../FirebaseConfig"
import { GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider, signInWithRedirect } from "firebase/auth"
import { useRouter } from 'vue-router'

let user_email = ref('')
let user_password = ref('')
let error_message = ref('')
const router = useRouter()


const userSignIn = (user_email: string, user_password: string) => {
    if (!user_email) {
        error_message.value = 'メールアドレスを入力してください'
        return
    }
    if (!user_password) {
        error_message.value = 'パスワードを入力してください'
        return
    }

    logOut()

    signInWithEmailAndPassword(auth, user_email, user_password)
    .then((userCredential) => {
        const user = userCredential.user;
        router.push('/')
    })
    .catch((error) => {
        const error_code = error.code
        if (error_code === 'auth/invalid-email'){
            error_message.value = '無効なメールアドレスです'
        } 
        else if (error_code === 'auth/wrong-password') {
            error_message.value = 'パスワードが間違っています'
        }
        else {
            console.log(error.code)
            error_message.value = 'サインインに失敗しました'
        }
    })
}
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user)
        
        router.push('/')
    }).catch((error) => {
        console.log(error)
    })
}

const githubSignIn = () => {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;
        router.push('/')
    }).catch((error) => {
        console.log(error)
    })
}

const twitterSignIn = () => {
    const provider = new TwitterAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
    //   const credential = TwitterAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   const secret = credential.secret;
        const user = result.user;
        router.push('/')
    }).catch((error) => {
        console.log(error)
    });  
}
</script>

<template>
    <div class="frame-border">
        <h2 id="signin-title">おかえりなさい</h2>
        <div class="main-container">
            <div class="input-form">
                <div class="label-container">
                    <label for="input-email">メールアドレス</label>
                    <label for="input-password">パスワード</label>
                </div>
                <div class="signin-input-container input-container">
                    <input id="input-email" class="signup-inputbox" type="email" v-model="user_email">
                    <input id="input-password" class="signup-inputbox" type="text" v-model="user_password">
                </div>
            </div> 
            <p class="error-msg">{{ error_message }}</p>
            <button class="signin-btn" @click="userSignIn(user_email, user_password)">サインイン</button>

            <div class="oauth-container">
                <button @click="googleSignIn">googleログイン</button>
                <button @click="githubSignIn">githubログイン</button>
                <button @click="twitterSignIn">twitterログイン</button>
            </div>
        </div>  
    </div>
</template>

<style lang="scss">
    $main-color: #2FDCE7;

    #signin-title {
        display: flex;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: 400;
        color: #FFFFFF;
    }

    .signin-input-container {
        display: flex;
        flex-direction: column;
    }

    .signin-input-container input {
        margin-bottom: 1rem;
    }

    .signin-btn {
        color: #FFFFFF;
        background-color: $main-color;
        border: $main-color 2px solid;
        width: 15rem;
        border-radius: 5px;
        font-size: 1.5rem;
    }
</style>