import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/Top.vue'
import SignUpView from '../views/SignUp.vue'
import SignInView from '../views/SignIn.vue'
import HomeView from '../views/Home.vue'
import OffersView from '../views/Offers.vue'
import MessagesView from '../views/Messages.vue'
import NotificationView from '../views/Notification.vue'
import PostView from '../views/Post.vue'
import UsersView from '../views/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: TopView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offers',
      name: 'offers',
      component: OffersView
    },
    {
      path: '/message',
      name: 'message',
      component: MessagesView
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
  ]
})

export default router