<template>
    <div>
        <!-- header -->
        <div class="title">
            <h1>ユーザー画面</h1>
        </div>
        
        <!-- body -->
        <div v-if="user !== undefined">
            <div>
                <div v-if="user">
		            <img :src="`${userInfo[0].icon}`">
                	
                	<h2>{{userInfo[0].username}}</h2>
		            <h3>{{userInfo[0].describe}}</h3>
		            
		            <a :href="`${userInfo[0].twitter_url}`" target="_blank" v-if="userInfo[0].twitter_url !== ''">
		            	<img src="../assets/TwitterIcon.png" alt=""></a>
		            
		            <a :href="`${userInfo[0].github_url}`" target="_blank" v-if="userInfo[0].github_url !== ''">
		            	<img src="../assets/GithubIcon.png" alt=""></a>
		            
		            <a :href="`${userInfo[0].qiita_url}`" target="_blank" v-if="userInfo[0].qiita_url !== ''">
		            	<img src="../assets/QiitaIcon.png" alt=""></a>
		            
	            
	            </div>
	            
                <div v-else>
                    <h1>
                    セッションタイムアウト  
                    </h1>
                </div>
            </div>
        </div>
        
        <!-- footer -->
        <div />
        
    </div>
</template>

<script setup >
	import { ref, watch, watchEffect } from "vue";
	import { auth, db } from "../FirebaseConfig";
	import { collection, query, onSnapshot, where } from "firebase/firestore";
	
	//const logo_github = require('@/assets/GithubIcon.png');
	const logo_github = "./assets/GithubIcon.png";
	console.log(logo_github)
	
	
	const user = ref(auth.currentUser);
	//console.log(user)
	//console.log(user?.uid)
	console.log(user?._rawValue?.uid)
	
	//const uid = user["_rawValue"]["uid"];
	
	const userInfo = ref([]);
	const chatsRef = ref(null);
	
	
	const q = query(collection(db, "users"), where("id", "==", user?._rawValue?.uid));
	const unsubscribe = onSnapshot(q, (snapshot) => {
		//console.log(snapshot);
	    snapshot.docChanges().forEach((change) => {
	            
	            //console.log("Message: ", change.doc.id, change.doc.data());
	            
	            userInfo.value.push({
	                id: change.doc.id,
	                ...change.doc.data(),
	            });
	            
	            //console.log("userInfo", userInfo);

	            setTimeout(() => {
	                if (chatsRef.value !== null) {
	                    console.log(chatsRef.value.scrollHeight);
	                    window.scrollTo(0, chatsRef.value.scrollHeight);
	                }
	            }, 60);
	        
	    });
	    
	    //console.log(unsubscribe);
	    
	});
	
</script>


<style>
.title{
	text-align: center;
}

</style>