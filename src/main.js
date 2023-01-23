import { createApp } from 'vue'
import { router } from './router.js'
import App from './App.vue'
import './tw-reset.css'
import 'uno.css'

createApp(App).use(router).mount('#app')
