<script setup>
import busicon from './busicon.vue'

const goHome = () =>{
    console.log('go Home')
    Android.goHome();
}

</script>

<template>
    <div class="w-full h-full flex bg-gradient-to-br from-zinc-800 to-sky-900 rounded-lg">
        <ul class="w-full h-full mt-12 px-1">
            <li class="rounded-sm pb-10">
                <a href="#" v-on:click="goHome" class="flex items-center space-x-3 rounded-md">
                    <svg class="w-8 h-8 stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                    </svg>
                    <span class="text-gray-100 text-xl">ホーム</span>
                </a>
            </li>
            <li class="rounded-sm pb-10">
                <router-link to="/payment">
                    <a href="#" class="flex items-center space-x-3 rounded-md">
                        <svg class="w-8 h-8 stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                            </path>
                        </svg>
                        <span class="text-gray-100 text-xl">複数人</span>
                    </a>
                </router-link>
            </li>
            <li class="rounded-sm pb-10">
                <router-link to="/payment/setting-busstop">
                    <a href="#" class="flex items-center space-x-3 rounded-md">
                        <busicon class="w-8 h-8 stroke-cyan-500" ></busicon>
                        <span class="text-gray-100 text-xl">停留所指定</span>
                    </a>
                </router-link>
            </li>
            <li class="rounded-sm pb-10">
                <router-link to="/payment/setting-price">
                    <a href="#" class="flex items-center space-x-3 rounded-md te">
                        <svg class="w-8 h-8 stroke-cyan-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                        <span class="text-gray-100 text-xl">金額指定</span>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>