<script setup lang="ts">
import { logOut } from '../stores/auth'
import { ref } from 'vue'
import { auth, db } from "../FirebaseConfig"
import { GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useRouter } from 'vue-router'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

let user_email = ref('')
let user_password = ref('')
let user_repassword = ref('')
let error_message = ref('')
const router = useRouter()
const default_icon = 'gs://youlink-bf71e.appspot.com/aaa'

const setUserDefault = async (user:any) => {
    const user_data = {
        id: user.uid,
        username: user.displayName ? user.displayName : 'ゲスト',
        address: user.email ? user.email : '',
        describe: '',
        icon: default_icon,
        twitter_url: '',
        github_url: '',
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
    <div>
        <input type="email" v-model="user_email">
        <input type="text" v-model="user_password">
        <input type="text" v-model="user_repassword">
        <p>{{error_message}}</p>
        <button @click="userSignUp(user_email, user_password)">登録</button>
        <button @click="googleSignUp">google登録</button>
        <button @click="githubSignUp">githubログイン</button>
        <button @click="twitterSignUp">twitterログイン</button>
    </div>
</template>