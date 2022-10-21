<script setup lang="ts">
import { logOut } from '../stores/auth'
import { ref } from 'vue'
import { auth, db } from "../FirebaseConfig"
import { GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useRouter } from 'vue-router'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

let user_name = ref('')
let user_email = ref('')
let user_password = ref('')
let user_repassword = ref('')
let error_message = ref('')
const router = useRouter()
const default_icon = 'https://firebasestorage.googleapis.com/v0/b/youlink-bf71e.appspot.com/o/user_default_icon.png?alt=media&token=39be9a7b-26b9-43d4-a145-d6fbe4bba4ea'

const setUserDefault = async (user:any) => {
    const user_data = {
        id: user.uid,
        username: user.displayName ? user.displayName : 'ゲスト',
        address: user.email ? user.email : '',
        describe: '',
        icon: default_icon,
        twitter_url: '',
        github_url: '',
        qiita_url: '',
        achievements: {},
        Is_public: false,
        created_at: serverTimestamp(),
        update_at: serverTimestamp()
    }

    await setDoc(doc(db, "users", user.uid), user_data);
}

const successCreateUser = (user:any) => {
    if (user.displayName) {
        updateProfile(auth.currentUser, {
            displayName: "ゲスト"
        }).then(() => {

        }).catch((error) => {
            console.log(error)
        })
    }

    setUserDefault(user)
    router.push('/')
}
const userSignUp = async (user_email: string, user_password: string) => {
    if (!user_name) {
        error_message.value = 'ユーザ名を入力してください'
        return
    }
    if (!user_email) {
        error_message.value = 'メールアドレスを入力してください'
        return
    }
    if (!user_password) {
        error_message.value = 'パスワードを入力してください'
        return
    }
    if (!user_repassword) {
        error_message.value = 'パスワードを再入力してください'
        return
    }

    logOut()

    createUserWithEmailAndPassword(auth, user_email, user_password)
    .then((userCredential) => {
        console.log("signup")
        const user = userCredential.user;

        successCreateUser(user)
    })
    .catch((error) => {
        const error_code = error.code;
        console.log(error_code)

        if (error_code === 'auth/email-already-exists') {
            error_message.value = '入力したメールアドレスはすでに利用されています'
        }
        else if (error_code === 'auth/invalid-password') {
            error_message.value = 'パスワードは6文字以上にしてください'
        }
        else 
        {
            error_message.value = '登録に失敗しました'
        }
    })
}

const googleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        
        successCreateUser(user)
    }).catch((error) => {
        console.log(error)
    })
}

const githubSignUp = () => {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;
        
        successCreateUser(user)
    }).catch((error) => {
        console.log(error)
    })
}

const twitterSignUp = () => {
    const provider = new TwitterAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        
        successCreateUser(user)
    }).catch((error) => {
        console.log(error)
    });  
}
</script>

<template>
    <div class="frame-border">
        <h2 id="signup-title">YOULINKへようこそ</h2>
        <div class="main-container">
            <div class="input-form">
                <div class="label-container">
                    <label for="input-username">ユーザ名</label>
                    <label for="input-email">メールアドレス</label>
                    <label for="input-password">パスワード</label>
                    <label for="input-repassword">パスワード再入力</label>
                </div>
                <div class="signup-input-container input-container">
                    <div class="username-container form-items">
                        <input id="input-username" class="signup-inputbox" type="text" v-model="user_name">
                    </div>
                    <div class="email-container form-items">
                        <input id="input-email" class="signup-inputbox" type="email" v-model="user_email">
                    </div>
                    <div class="password-container form-items">
                        <input id="input-password" class="signup-inputbox" type="text" v-model="user_password">
                    </div>
                    <div class="repassword-container form-items">
                        <input id="input-repassword" class="signup-inputbox" type="text" v-model="user_repassword">
                    </div>
                </div>
            </div>
            <p>{{error_message}}</p>
            <button class="register-btn" @click="userSignUp(user_email, user_password)">登録</button>
            <div class="oauth-container">
                <img class="signup-oauth-btn oauth-btn google-signin" @click="googleSignUp" src="../assets/btn_google_signin_light_normal_web@2x.png">
                <button class="signup-oauth-btn oauth-btn" @click="githubSignUp">githubログイン</button>
                <button class="signup-oauth-btn oauth-btn" @click="twitterSignUp">twitterログイン</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    $main-color: #2FDCE7;

    .frame-border {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: $main-color;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #signup-title {
        display: flex;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: 400;
    }

    .signup-inputbox {
        border: 2px solid #2FDCE7;
        border-radius: 5px;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        border-radius: 10px;
        width: 90%;
        height: 67%;
    }
    
    .register-btn {
        color: #FFFFFF;
        background-color: $main-color;
        border: $main-color 2px solid;
        width: 15rem;
        border-radius: 5px;
        font-size: 1.5rem;
    }
    
    .input-form {
        display: flex;
    }

    .label-container {
        display: flex;
        flex-direction: column;
        margin: 1rem;
    }

    .label-container label {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .input-container {
        margin: 1rem;
    }

    .signup-input-container div {
        margin-bottom: 1rem;
    }

    .input-container input {
        width: 15rem;
        height: 1.5rem;
        margin-bottom: 0.3rem;
    }

    .form-items {
        margin: 0.5rem;
    }
    
    #signup-title {
        color: #FFFFFF
    }

    .oauth-btn {
        background-color: #FFFFFF;
        border: 1px solid #000000;
        margin-left: 1rem;
        margin-right: 1rem;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);  
        border-radius: 5px;
    }

    .google-signin {
        width: 10rem;
    }

</style>