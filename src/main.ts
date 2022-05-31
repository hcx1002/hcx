import {createApp} from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import axios from './plugins/axiosInstance'
import './mock'

const app = createApp(App).use(router).use(store);
app.config.globalProperties.$axios = axios;
app.mount('#app')
