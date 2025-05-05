import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App }
  ]
})

import { createApp } from 'vue'
createApp(App).use(router).mount('#app')