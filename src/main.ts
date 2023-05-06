import { createApp } from 'vue'
import './assets/main.less'
import 'lib-flexible/flexible.js'
import 'virtual:uno.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPersist)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(pinia)
app.use(router)
app.mount('#app')
