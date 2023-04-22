import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import 'lib-flexible/flexible.js'
import 'virtual:uno.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(createPinia())
app.use(router)

app.mount('#app')
