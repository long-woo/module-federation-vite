import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { App, router } from './mod'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
