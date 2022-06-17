import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from "./store"
import router from './router'
// import axios from './plugins/axiosInstance'
import VueWechatTitle from 'vue-wechat-title';
import './mock'

const app = createApp(App).use(router).use(store).use(ElementPlus).use(VueWechatTitle);
// app.config.globalProperties.$axios = axios;
app.mount('#app')
