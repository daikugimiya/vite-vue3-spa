<script setup lang="ts">
import {ref} from 'vue'
import setting_button from '../../components/setting_button.vue';
import setting_state_span from '../../components/setting_state_span.vue';
import setting_display from '../../components/setting_display.vue';

// 1. 設定情報を取得して1台構成か2台構成かを確認して画面の描画をわける
// 2. 1台構成のときは、乗車or降車or兼用構成となる

// 2台構成かどうか
const isTwoSetting = ref(false)


</script>

<template>
    <!-- 2台構成 -->
    <div v-if="isTwoSetting" class="w-full h-full flex bg-main">
        <div class="w-1/2 h-full ">
            
            <div class="flex w-full h-1/2 items-center justify-center flex-col">
                <div class="flex">
                    <p class="ml-6 text-2xl text-white">乗車リーダー</p>
                </div>
                <svg class="w-40 h-32 stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                    </path>
                </svg>
            </div>
            
            <div class="flex w-full h-1/2 items-center justify-between flex-col pt-0 px-5 pb-5">
                <div class="flex items-center">
                    <p class="text-2xl text-white">カードリーダー</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">QRリーダー</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">ドア</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">開</p>
                    <svg class="ml-6 w-12 h-12 stroke-blue-900 fill-cyan-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 130" xml:space="preserve">
                        <g>
                        <path d="M0,115.27h4.39V1.99V0h1.99h82.93h1.99v1.99v113.28h5.14v7.61H0V115.27L0,115.27z M13.88,8.32H81.8h0.83v0.83 v104.89h4.69V3.97H8.36v111.3h4.69V9.15V8.32H13.88L13.88,8.32z M15.94,114.04H75.1l-0.38-0.15l-27.76-3.79V33.9l32.79-20.66v-2.04 H15.94V114.04L15.94,114.04z M51.7,59.66l4.23-1.21v15.81l-4.23-1.53V59.66L51.7,59.66z"/>
                        </g>
                    </svg>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">GPSモジュール</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
            </div>
            
        </div>
        <div class="w-1/2 h-full ">
            
            <div class="flex w-full h-1/2 items-center justify-center flex-col">
                <div class="flex">
                    <p class="ml-6 text-2xl text-white">降車リーダー</p>
                </div>
                <svg class="w-40 h-32 stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                    </path>
                </svg>
            </div>
            <div class="flex w-full h-1/2 items-center justify-between flex-col pt-0 px-5 pb-5">
                <div class="flex items-center">
                    <p class="text-2xl text-white">カードリーダー</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">QRリーダー</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">ドア</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">閉</p>
                    <svg class="ml-6 w-12 h-12 stroke-blue-900 fill-cyan-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 130" xml:space="preserve">
                        <g>
                        <path d="M0,115.27h4.39V1.99V0h1.99h82.93h1.99v1.99v113.28h5.14v7.61H0V115.27L0,115.27z M13.88,8.32H81.8h0.83v0.83 v104.89h4.69V3.97H8.36v111.3h4.69V9.15V8.32H13.88L13.88,8.32z M19.75,59.66l4.23-1.21v15.81l-4.23-1.53V59.66L19.75,59.66z"/>
                        </g>
                    </svg>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">GPSモジュール</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
            </div>
            
        </div>
    </div>

    <!-- 1台構成 -->
    <div v-else class="w-full h-full flex rounded-lg">
        <div class="flex w-full h-full items-center justify-center">
            
            <div class="flex w-full h-1/2 items-center justify-center flex-col">
                <div class="flex">
                    <p class="ml-6 text-2xl text-white">兼用リーダー</p>
                </div>
                <svg class="w-40 h-32 stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                    </path>
                </svg>
            </div>
            <div class="flex w-full h-1/2 items-center justify-between flex-col pt-0 px-5 pb-5">
                <div class="flex items-center">
                    <p class="text-2xl text-white">カードリーダー</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">QRリーダー</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">ドア</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">開</p>
                    <svg class="ml-6 w-12 h-12 stroke-blue-900 fill-cyan-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 100 130" xml:space="preserve">
                        <g>
                        <path d="M0,115.27h4.39V1.99V0h1.99h82.93h1.99v1.99v113.28h5.14v7.61H0V115.27L0,115.27z M13.88,8.32H81.8h0.83v0.83 v104.89h4.69V3.97H8.36v111.3h4.69V9.15V8.32H13.88L13.88,8.32z M15.94,114.04H75.1l-0.38-0.15l-27.76-3.79V33.9l32.79-20.66v-2.04 H15.94V114.04L15.94,114.04z M51.7,59.66l4.23-1.21v15.81l-4.23-1.53V59.66L51.7,59.66z"/>
                        </g>
                    </svg>
                </div>
                <div class="flex items-center">
                    <p class="text-2xl text-white">GPSモジュール</p>
                    <p class="ml-4 text-xl text-white">:</p>
                    <p class="ml-6 text-2xl text-white">OK</p>
                </div>
            </div>
            
        </div>
    </div>


</template>