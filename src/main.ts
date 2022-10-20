import { createApp } from 'vue'
import './style.css'
import './index.css'
import router from './router/router'
import App from './App.vue'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App).component('EasyDataTable', Vue3EasyDataTable).use(router).mount('#app')

