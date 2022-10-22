<template>
    <div>
        <!-- header -->
        <div class="title">
            
        </div>
        
        <!-- body -->
        <div v-if="user !== undefined" class="main">
            <div>
                <div v-if="user">
		            
		            <div class="center"><img :src="`${userInfo[0].icon}`" width="100"></div>
                		
                	<p class="center f48">{{userInfo[0].username}}</p>
		            <p class="center f24">{{userInfo[0].describe}}</p>
		            
		            <div class="img_list">
		            	<div><a :href="`${userInfo[0].twitter_url}`" target="_blank" v-if="userInfo[0].twitter_url !== ''">
		            	<img src="../assets/TwitterIcon.png" alt="" class="logo"></a>
		            	</div>
		            	
		            	<div><a :href="`${userInfo[0].github_url}`" target="_blank" v-if="userInfo[0].github_url !== ''">
		            	<img src="../assets/GithubIcon.png" alt="" class="logo"></a>
		            	</div>
		            
		            	<div><a :href="`${userInfo[0].qiita_url}`" target="_blank" v-if="userInfo[0].qiita_url !== ''">
		            	<img src="../assets/QiitaIcon.png" alt="" class="logo"></a>
		            	</div>
	            	</div>
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
	//const logo_github = "./assets/GithubIcon.png";
	//console.log(logo_github)
	
	
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
.img_list{
    display:flex;
    justify-content: center;
}
.logo{
	width:40px;
}
.center{
	text-align: center;
}
.f48{
	font-size:32px;
}
.f24{
	font-size:16px;
}
</style>