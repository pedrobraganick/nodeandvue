import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';
import SmartTable from 'vuejs-smart-table'


Axios.defaults.headers.common['Authorization'] = `x-access-token ${store.state.token}`;

createApp(App).use(store).use(router).use(SmartTable).mount('#app')


