<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>
    
<template>
    <div class="flex">
        <div class="w-30 h-full flex flex-col p-3 mr-1 duration-300 bg-gray-800 shadow">
            <div class="space-y-3">
                <div class="relative">
                    <span
                        class="absolute inset-y-0 left-0 flex items-center py-4"
                    >
                        <button
                            type="submit"
                            class="p-2 focus:outline-none focus:ring"
                        >
                            
                        </button>
                    </span>
                </div>
                <div class="flex-1">
                    <ul class="pt-2 pb-4 space-y-1 text-sm">
                        <li class="rounded-sm">
                        
                            <router-link to="/history">
                                <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z">
                                    </path>
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd">
                                    </path>
                                </svg>

                                    <span class="text-gray-100">Credit</span>
                                </a>
                            </router-link>
                            
                        </li>
                        <li class="rounded-sm">
                            <router-link to="/history/qr">
                                <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                                >
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" stroke-width="2" 
                                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z">
                                    </path>
                                </svg>

                                    <span class="text-gray-100">QR</span>
                                </a>
                            </router-link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>