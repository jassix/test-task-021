import '@/app/styles/global.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/app/app.vue'
import { router } from '@/app/router'

export const app = createApp(App).use(createPinia()).use(router)
