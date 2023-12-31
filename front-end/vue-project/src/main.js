import './assets/main.css'

import { createApp } from 'vue'
import App from '../src/views/login.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
