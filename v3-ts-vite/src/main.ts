import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import directives from './directives'

const app = createApp(App)
app.use(ElementPlus)
app.use(directives)
app.mount('#app')
