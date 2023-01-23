import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Flex from './pages/Flex.vue'

export const router = createRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/flex', component: Flex, name: 'flex' },
  ],
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
})
