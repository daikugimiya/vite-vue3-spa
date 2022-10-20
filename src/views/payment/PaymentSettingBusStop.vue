<script setup lang="ts">
import { ref } from "vue";

// 後にオブジェクトとしてしっかり管理ンゴ

const adultCount = ref(1)
const childCount = ref(0)
const adultHandiCapCount = ref(0)
const childHandiCapCount = ref(0)

let isAdultMax = ref(false) // max
let isAdultMin = ref(false) // min
let isChildMax = ref(false) // max
let isChildMin = ref(true) // min
let isAdultHandiCapMax = ref(false) // max
let isAdultHandiCapMin = ref(true) // min
let isChildHandiCapMax = ref(false) // max
let isChildHandiCapMin = ref(true) // min


const selectedStop = ref(0)

const addCount = (type:string) =>{

    switch(type){

        case 'adult':
            adultCount.value = adultCount.value + 1
            console.log('adult' + adultCount.value)
            // 10人以上なら
            isAdultMax.value = adultCount.value >= 10 ? true : false
            isAdultMin.value = false
            break

        case 'child':
            childCount.value = childCount.value + 1
            console.log('child')
            isChildMax.value = childCount.value >= 10 ? true : false
            isChildMin.value = false
            break

        case 'adultHandiCap':
            adultHandiCapCount.value = adultHandiCapCount.value + 1
            console.log('adultHandiCap')
            isAdultHandiCapMax.value = adultHandiCapCount.value >= 10 ? true : false
            isAdultHandiCapMin.value = false
            break

        case 'childHandiCap':
            childHandiCapCount.value = childHandiCapCount.value + 1
            console.log('childHandiCap')
            isChildHandiCapMax.value = childHandiCapCount.value >= 10 ? true : false
            isChildHandiCapMin.value = false
            break

    }

}

const removeCount = (type:string) =>{

    switch(type){

        case 'adult':
            adultCount.value = adultCount.value - 1
            console.log('adult')
            isAdultMin.value = adultCount.value <= 0 ? true : false
            isAdultMax.value = false
            break

        case 'child':
            childCount.value = childCount.value - 1
            console.log('child')
            isChildMin.value = childCount.value <= 0 ? true : false
            isChildMax.value = false
            break

        case 'adultHandiCap':
            adultHandiCapCount.value = adultHandiCapCount.value - 1
            console.log('adultHandiCap')
            isAdultHandiCapMin.value = adultHandiCapCount.value <= 0 ? true : false
            isAdultHandiCapMax.value = false
            break

        case 'childHandiCap':
            childHandiCapCount.value = childHandiCapCount.value - 1
            console.log('childHandiCap')
            isChildHandiCapMin.value = childHandiCapCount.value <= 0 ? true : false
            isChildHandiCapMax.value = false
            break

    }

}

const isVisible = ref(false)

const displayModal = (num:number) =>{

    selectedStop.value = num
    isVisible.value = true

}

const hiddenModal = () => {
    isVisible.value = false
    
    // 各種変数初期化
    adultCount.value = 1
    childCount.value = 0
    adultHandiCapCount.value = 0
    childHandiCapCount.value = 0

    isAdultMax.value = false // max
    isAdultMin.value = false // min
    isChildMax.value = false // max
    isChildMin.value = true // min
    isAdultHandiCapMax.value = false // max
    isAdultHandiCapMin.value = true // min
    isChildHandiCapMax.value = false // max
    isChildHandiCapMin.value = true // min

}



</script>

<template>

    <div class="w-full rounded-lg overflow-hidden flex " >
            <div class="flex flex-col justify-start items-start w-full h-full overflow-y-auto">

                <dv v-for="n in 10" class="flex justify-center w-full h-full">
                    <a href="#" @click="displayModal(n)" class="flex justify-between w-11/12 h-24 p-8 m-2 rounded-lg border border-gray-700 shadow-md hover:bg-gray-500 bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 pl-20 text-2xl font-bold tracking-tight text-white dark:text-white">{{n}}</h5>
                        <h5 class="mb-2 pr-20 text-2xl font-bold tracking-tight text-white dark:text-white">停留所 - {{n}}</h5>
                    </a>
                </dv>
                
            </div>
    </div>

    <div v-if="isVisible" id="myModal" >
        <div id="large-modal" class="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full h-full">
            <div class="relative p-0 w-full h-auto">
                <div class="rounded-lg shadow bg-gray-700 m-20">
                    <div id="main" class="flex items-center flex-col p-4">

                        <div class="flex w-full h-full items-center justify-center mt-0">
                            <p class="text-2xl text-white">乗車停留所:{{selectedStop}} 決済を行いますか？</p>
                        </div>
                        
                        <!-- 大人 -->
                        <div id="adult-handi-row" class="flex w-full h-full mt-4">
                            <div class="flex w-1/2 h-1/4 justify-center">
                                <div class="flex items-center justify-center">
                                    <p class="text-white text-3xl">大人</p>
                                </div>
                            </div>
                            <div class="flex w-1/2 h-1/4 justify-between">
                                <div class="flex items-center justify-center">
                                    <button v-bind:disabled="isAdultMin" class="w-full h-full " @click='removeCount("adult")'>
                                        <svg class="w-10 h-10 stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="items-center justify-center w-full text-white text-3xl">
                                    {{adultCount}}人
                                </div>
                                <div class="flex items-center justify-center">
                                    <button :disabled="isAdultMax" class="w-full h-full" @click='addCount("adult")'>
                                        <svg class="w-10 h-10 stroke-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- 子供 -->
                        <div id="adult-handi-row" class="flex w-full h-full mt-4">
                            <div class="flex w-1/2 h-1/4 justify-center">
                                <div class="flex items-center justify-center">
                                    <p class="text-white text-3xl">大人</p>
                                </div>
                            </div>
                            <div class="flex w-1/2 h-1/4 justify-between">
                                <div class="flex items-center justify-center">
                                    <button v-bind:disabled="isChildMin" class="w-full h-full " @click='removeCount("child")'>
                                        <svg class="w-10 h-10 stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="items-center justify-center w-full text-white text-3xl">
                                    {{childCount}}人
                                </div>
                                <div class="flex items-center justify-center">
                                    <button :disabled="isChildMax" class="w-full h-full" @click='addCount("child")'>
                                        <svg class="w-10 h-10 stroke-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        

                        <!-- 大人障害者 -->
                        <div id="adult-handi-row" class="flex w-full h-full mt-4">
                            <div class="flex w-1/2 h-1/4 justify-center">
                                <div class="flex items-center justify-center">
                                    <p class="text-white text-3xl">大人</p>
                                </div>
                            </div>
                            <div class="flex w-1/2 h-1/4 justify-between">
                                <div class="flex items-center justify-center">
                                    <button v-bind:disabled="isAdultHandiCapMin" class="w-full h-full " @click='removeCount("adultHandiCap")'>
                                        <svg class="w-10 h-10 stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="items-center justify-center w-full text-white text-3xl">
                                    {{adultHandiCapCount}}人
                                </div>
                                <div class="flex items-center justify-center">
                                    <button :disabled="isAdultHandiCapMax" class="w-full h-full" @click='addCount("adultHandiCap")'>
                                        <svg class="w-10 h-10 stroke-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        

                        <!-- 子供障害者 -->
                        <div id="adult-handi-row" class="flex w-full h-full mt-4">
                            <div class="flex w-1/2 h-1/4 justify-center">
                                <div class="flex items-center justify-center">
                                    <p class="text-white text-3xl">小人(割)</p>
                                </div>
                            </div>
                            <div class="flex w-1/2 h-1/4 justify-between">
                                <div class="flex items-center justify-center">
                                    <button v-bind:disabled="isChildHandiCapMin" class="w-full h-full " @click='removeCount("childHandiCap")'>
                                        <svg class="w-10 h-10 stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="items-center justify-center w-full text-white text-3xl">
                                    {{childHandiCapCount}}人
                                </div>
                                <div class="flex items-center justify-center">
                                    <button :disabled="isChildHandiCapMax" class="w-full h-full" @click='addCount("childHandiCap")'>
                                        <svg class="w-10 h-10 stroke-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div id="footer" class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button type="button" class="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">決済</button>
                        <button type="button" @click="hiddenModal" class="w-full h-full text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-3xl font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">キャンセル</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

</style>