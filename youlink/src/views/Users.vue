<template>
	<div class="title">
		<h1>ユーザー画面</h1>
		<div class="UserScene">
			
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getUser } from '../stores/auth'

export default ({
	name: 'UserScene',
	setup() {
		
		const user = getUser()
		console.log(user)
		
	}
});

</script>


<style>
.title{
	text-align: center;
}
</style>