<script setup>

const goHome = () =>{
    console.log('go Home')
    Android.goHome();
}
</script>


<template>
    <div class="w-full h-full flex bg-sidebar rounded-lg">
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
                <router-link to="/history">
                    <a
                    href="#"
                    class="flex items-center space-x-2 rounded-md te"
                    >
                    <svg class="w-8 h-8 stroke-cyan-500" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z">
                        </path>
                        <path 
                            fill-rule="evenodd" 
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd">
                        </path>
                    </svg>
                    <span class="text-gray-100 text-xl">クレジット</span>
                    </a>
                </router-link>
            </li>
            <li class="rounded-sm pb-10">
                <router-link to="/history/qr">
                    <a
                    href="#"
                    class="flex items-center space-x-2 rounded-md"
                    >
                    <svg class="w-8 h-8 stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" stroke-width="2" 
                            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z">
                        </path>
                    </svg>
                        <span class="text-gray-100 text-xl">QR</span>
                    </a>
                </router-link>
            </li>
            <li class="rounded-sm pb-10">
                <router-link to="/history/bus">
                    <a
                    href="#"
                    class="flex items-center space-x-2 rounded-md"
                    >
                    <svg class="w-8 h-8 stroke-cyan-500" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fill-rule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd">
                        </path>
                    </svg>
                    <span class="text-gray-100 text-xl">運行</span>
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>