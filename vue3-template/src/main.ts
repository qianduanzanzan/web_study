import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import '@/assets/style/common.scss'
import components from "./components";
import './assets/iconfont/iconfont.js';


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(components);
app.mount('#app')
