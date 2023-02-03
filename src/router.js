import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Flex from './pages/Flex.vue'
import FlexBasis from './pages/FlexBasis.vue'
import FlexDirection from './pages/FlexDirection.vue'
import FlexWrap from './pages/FlexWrap.vue'
import FlexGrow from './pages/FlexGrow.vue'
import FlexShrink from './pages/FlexShrink.vue'
import Order from './pages/Order.vue'
import GridTemplateColumns from './pages/GridTemplateColumns.vue'
import GridColumnSE from './pages/GridColumnSE.vue'
import GridTemplateRows from './pages/GridTemplateRows.vue'
import GridRowSE from './pages/GridRowSE.vue'
import GridAutoFlow from './pages/GridAutoFlow.vue'
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
    { path: '/order', component: Order, name: 'order' },
    { path: '/grid-template-columns', component: GridTemplateColumns, name: 'grid-template-columns' },
    { path: '/grid-column-se', component: GridColumnSE, name: 'grid-column-se' },
    { path: '/grid-template-rows', component: GridTemplateRows, name: 'grid-template-rows' },
    { path: '/grid-row-se', component: GridRowSE, name: 'grid-row-se' },
    { path: '/grid-auto-flow', component: GridAutoFlow, name: 'grid-auto-flow' },
    { path: '/spacing', component: Spacing, name: 'spacing' },
  ],
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
})
