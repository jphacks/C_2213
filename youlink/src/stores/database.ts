import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FirebaseConfig'
import { ref, onMounted } from 'vue'
const data = ref()
const isLoading = ref(false)
const error = ref()


const getUsers = async () => {
    console.log("getUsers")
    isLoading.value = true
    try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        data.value = usersSnapshot.docs.map(doc => doc.data());
        console.log(data.value)
    } catch (e) {
        error.value = e
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    getUsers()
})