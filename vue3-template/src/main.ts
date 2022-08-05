import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import router from './router/index'
import '@/assets/style/common.scss'
import components from "./components";
import directives from "./directives";
import './assets/iconfont/iconfont.js';
import { createPinia } from 'pinia';
import '@/utils/request'
import '@/mock/index'
// require('./mock.js')

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.use(pinia)
app.use(components);
app.use(directives);
app.mount('#app')
