import { createApp, } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
const vuetify = createVuetify({ components, directives }); 

app.use(createPinia())
  .use(router)
app.component('Datepicker', Datepicker);
  app.use(vuetify)
  .mount('#app')


