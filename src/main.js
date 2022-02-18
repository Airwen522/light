import { createApp } from 'vue';
import App from './App.vue';
import router from './config/router/index';
import axios from './config/axios/index';
import VueAxios from 'vue-axios';
import 'virtual:svg-icons-register';
import wiIcon from './components/wi-icon/wi_icon.vue'
const app = createApp(App)
app.use(VueAxios,axios)
app.use(router)
app.component('wi-icon',wiIcon)
app.mount('#app')