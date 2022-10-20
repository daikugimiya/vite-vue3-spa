<script setup>

const goHome = () =>{
    console.log('go Home')
    Android.goHome();
}
</script>

<template>
    <div class="w-full h-full flex bg-gradient-to-br from-gray-900 to-sky-900 rounded-lg">
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
                <router-link to="/information">
                    <a href="#" class="flex items-center space-x-2 rounded-md te">
                    <svg class="w-8 h-8 stroke-cyan-500" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fill-rule="evenodd" 
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                        </path>
                    </svg>
                    <span class="text-gray-100 text-xl">設定情報</span>
                    </a>
                </router-link>
            </li>
            <li class="rounded-sm pb-10">
                <router-link to="/information/terminal">
                    <a
                    href="#"
                    class="flex items-center space-x-2 rounded-md"
                    >
                    <svg class="w-8 h-8 stroke-cyan-500" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fill-rule="evenodd" 
                            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd">
                        </path>
                    </svg>
                    <span class="text-gray-100 text-xl">端末情報</span>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>