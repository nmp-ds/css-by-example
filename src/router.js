import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Flex from './pages/Flex.vue'
import Spacing from './pages/Spacing.vue'

export const router = createRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/flex', component: Flex, name: 'flex' },
    { path: '/spacing', component: Spacing, name: 'spacing' },
  ],
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
})
