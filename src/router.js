import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Flex from './pages/Flex.vue'
import FlexBasis from './pages/FlexBasis.vue'
import FlexDirection from './pages/FlexDirection.vue'
import FlexWrap from './pages/FlexWrap.vue'
import FlexGrow from './pages/FlexGrow.vue'
import FlexShrink from './pages/FlexShrink.vue'
import Spacing from './pages/Spacing.vue'

export const router = createRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/flex', component: Flex, name: 'flex' },
    { path: '/flex-basis', component: FlexBasis, name: 'flex-basis' },
    { path: '/flex-direction', component: FlexDirection, name: 'flex-direction' },
    { path: '/flex-wrap', component: FlexWrap, name: 'flex-wrap' },
    { path: '/flex-grow', component: FlexGrow, name: 'flex-grow' },
    { path: '/flex-shrink', component: FlexShrink, name: 'flex-shrink' },
    { path: '/spacing', component: Spacing, name: 'spacing' },
  ],
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
})
