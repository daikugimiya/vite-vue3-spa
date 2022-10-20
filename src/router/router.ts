import { createRouter,createWebHistory } from 'vue-router';
import HelloWorldVue from '../views/hello/HelloWorld.vue';
import HomeVue from '../views/home/Home.vue';

import HistoryVue from '../views/history/History.vue';
import HistoryQRVue from '../views/history/HistoryQR.vue';
import HistoryCreditVue from '../views/history/HistoryCredit.vue';
import HistoryBusVue from '../views/history/HistoryBus.vue';

import InfoVue from '../views/info/Info.vue';
import InfoSettingVue from '../views/info/InfoSetting.vue';
import InfoTerminalVue from '../views/info/InfoTerminal.vue';

import PaymentVue from '../views/payment/Payment.vue';
import PaymentSettingBusStopVue from '../views/payment/PaymentSettingBusStop.vue';
import PaymentSettingPrice from '../views/payment/PaymentSettingPrice.vue'
import PaymentSettingMultiPersonVue from '../views/payment/PaymentSettingMultiPerson.vue';

import testVue from '../views/test/test.vue'
import table_testVue from '../views/test/table_test.vue'
import modal_testVue from '../views/test/modal_test.vue'

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
            },
            {
                path:'bus',
                component: HistoryBusVue
            }
        ]
    },
    {   
        path: '/information', name: 'information', 
        component: InfoVue,
        children:[
            {
                path:'',
                component: InfoSettingVue
            },
            {
                path:'terminal',
                component: InfoTerminalVue
            }
        ]
    },
    {   
        path: '/payment', name: 'payment', 
        component: PaymentVue,
        children:[
            {
                path:'',
                component: PaymentSettingMultiPersonVue
            },
            {
                path:'setting-busstop',
                component: PaymentSettingBusStopVue
            },
            {
                path:'setting-price',
                component: PaymentSettingPrice
            }
        ]
    }
]
 
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
 
export default router;