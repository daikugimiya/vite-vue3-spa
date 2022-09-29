import { createRouter,createWebHistory } from 'vue-router';
import HelloWorldVue from '../components/hello/HelloWorld.vue';
import HomeVue from '../components/home/Home.vue';
import HistoryVue from '../components/history/History.vue';
import HistoryQRVue from '../components/history/HistoryQR.vue';
import HistoryCreditVue from '../components/history/HistoryCredit.vue';

const routes = [
    {   
        path: '/', name: 'home', 
        component: HomeVue 
    },
    {   
        path: '/hello', name: 'hello', 
        component: HelloWorldVue 
    },
    {   
        path: '/history', name: 'history', 
        component: HistoryVue,
        children:[
            {
                path:'',
                component: HistoryCreditVue
            },
            {
                path:'qr',
                component: HistoryQRVue
            }
        ]
    }
]
 
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
 
export default router;