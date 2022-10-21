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
import DirectMessageView from '../views/DirectMessage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/top',
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
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offers',
      name: 'offers',
      component: OffersView
    },
    {
      path: '/messages',
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
      path: '/users/:id',
      name: 'users',
      component: UsersView
    },
    {
      path: '/directmessage/:id',
      name: 'directmessage',
      component: DirectMessageView
    },
  ]
})

export default router
