<script setup lang="ts">
import { defineComponent, ref, reactive, toRefs,computed,onMounted } from "vue";
import SampleApiService from '../../services/SampleApiService';
import ResponseData from '../../types/ResponseData'

import type { Header, Item, ClickRowArgument} from "vue3-easy-data-table";

// $ref dataTable
const dataTable = ref();

// index related
const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex);
const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex);
const clientItemsLength = computed(() => dataTable.value?.clientItemsLength);

// pagination related
const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber);
const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber);

const isFirstPage = computed(() => dataTable.value?.isFirstPage);
const isLastPage = computed(() => dataTable.value?.isLastPage);

const nextPage = () => {
    dataTable.value.nextPage();
};
const prevPage = () => {
    dataTable.value.prevPage();
};
const updatePage = (paginationNumber: number) => {
    dataTable.value.updatePage(paginationNumber);
};

// rows per page related
const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions);
const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption);

const updateRowsPerPageSelect = (e: Event) => {
    dataTable.value.updateRowsPerPageActiveOption(Number((e.target as HTMLInputElement).value));
};


const isModalVisible = ref(false)

const loading = ref(false)


const headers: Header[] = [
      { text: "時刻", value: "transitAt",sortable: true},
      { text: "カード番号", value: "maskedPan"},
      { text: "利用", value: "abtEventType"},
      { text: "可否", value: "terminalAcceptance"},
    //   { text: "取消", value: "cancel"},
    ];

type history ={
    transitAt: string
    maskedPan: string
    abtEventType: string
    terminalAcceptance: string
    cancelable: boolean
    isCanceled: boolean
    isUploaded: boolean
    fareAmount: number
    routeId: string
    routeName: string
    tripId: string
    tripName: string
    stopId: string
    stopName: string
    brandName: string
    countAdult: number
    countAdultDiscount: number
    countChild: number
    countChildDiscount: number
    fareCollection: string
    accountMedia: string
};


// 表示用 リアクティブ
// let histories : History[]= ref([]);


// 表示用 リアクティブ
const histories = ref<history[]>([]);
const selectedHistory = ref()



// tableのサイズを動的に生成
const table_head_body_foot = ref<HTMLDivElement>()
const tableHeaderBodyHeight = ref(0)
const tableRowHeight = ref('')


const formatTime = (time:string) => {

    const convertJST = new Date(time);
    convertJST.setHours(convertJST.getHours() + 9);
    const updatedTime = convertJST.toLocaleString('ja-JP').slice(0,-3);
    const formatTime = updatedTime.substr(updatedTime.indexOf('/') + 1)

    return formatTime
}

const selectedFormatTime = (time:string) => {
    const convertJST = new Date(time);
    convertJST.setHours(convertJST.getHours() + 9);
    const updatedTime = convertJST.toLocaleString('ja-JP').slice(0,-3);
    return updatedTime
}


const touchRow = (item: ClickRowArgument) => {
    isModalVisible.value = true
    console.log(item);
    item.transitAt = selectedFormatTime(item.transitAt) // 時刻プロパティだけ、整形したものを入れる
    selectedHistory.value = item
};

const cancelModal = () => {
    isModalVisible.value = false
}


onMounted(() => {

    SampleApiService.getCreditHistory()
    .then(
    (response:ResponseData) => {
        console.log(response)

        histories.value = response.data

        // console.log(histories.value[0].transitAt)

        // console.log(histories.value[0].muskedPan)


    }
    )
    .catch(
        error => console.log(error)
    )

    const tableALLHeight = table_head_body_foot.value?.clientHeight
    if (tableALLHeight != undefined){
        tableHeaderBodyHeight.value = tableALLHeight * 0.8333333 // 5/6をヘッダー + ボディとして設定できる
        tableRowHeight.value = ((tableHeaderBodyHeight.value - 60) * 0.2).toString() + 'px' // ヘッダーを決め打ち60px
    }
    
})

</script>

<template>
    <div ref="table_head_body_foot" class="w-full rounded-lg  overflow-hidden">
        <div class="w-full h-5/6">
            <EasyDataTable
                ref="dataTable"
                table-class-name="customize-table"
                header-text-direction="center"
                body-text-direction="center"
                theme-color="#f48225"
                :table-height=tableHeaderBodyHeight
                :hide-footer=true
                :headers="headers"
                :items="histories"
                :rows-items=5
                :rows-per-page=5
                :loading="loading"
                @click-row="touchRow"
            >

                <template #item-transitAt="{transitAt}">
                    <div class="operation-wrapper">
                        <div class="img-center">
                            {{formatTime(transitAt)}}
                        </div>
                    </div>
                </template>

                <template #item-abtEventType="{abtEventType}">
                    <div class="operation-wrapper">
                        <div v-if='abtEventType == "transit_entered"' class="img-center">
                            乗
                        </div>
                        <div v-else class="img-center">
                            降
                        </div>
                    </div>
                </template>

                <template #item-terminalAcceptance="{terminalAcceptance}">
                <div class="operation-wrapper">
                    <div v-if='terminalAcceptance == "accepted"' class="img-center">
                        <svg class="w-10 h-10 stroke-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <div v-else class="img-center">
                        <svg class="w-10 h-10 stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                </div>
                </template>
            </EasyDataTable>
        </div>
        
        <div class="flex justify-between w-full h-1/6 rounded-b-lg bg-[#1b3967]">
            <div class="prev-page w-20 h-full " @click="prevPage" :disabled="isFirstPage">
                <svg class="stroke-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </div>
            <div class="grid w-60 h-full text-xl items-center text-[#e7e8e9] text-3xl">
                {{currentPageFirstIndex}} ~ {{currentPageLastIndex}} / {{clientItemsLength}}件
            </div>
            <div class="next-page w-20 h-full " @click="nextPage" :disabled="isLastPage">
                <svg class="stroke-cyan-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    </div>


    <div v-if="isModalVisible" id="myModal" >
        <div id="large-modal" class="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed z-10 top-0 right-0 left-0  w-full h-full">
            <div class="relative p-0 w-full h-auto">
                <div class="rounded-lg shadow-2xl bg-gray-700 m-6">
                    
                    <div id="main" class="flex items-center justify-center flex-col p-4 ">
                        <div class="flex w-full items-center justify-center text-white text-4xl mt-2">
                            <p class="ml-2 border-sky-300 border-b">{{selectedHistory.transitAt}}</p>
                        </div>
                        <div class="flex w-full h-full items-center justify-start text-white text-3xl mt-4">
                            <div class="flex w-full h-full items-center ">
                                <p class="ml-2">【ブランド】</p>
                                <p class="ml-2 border-sky-300 border-b">{{selectedHistory.brandName}}</p>
                            </div>
                            <div class="flex w-full h-full items-center ">
                                <p class="ml-2">【番号】</p>
                                <p class="ml-2 border-sky-300 border-b">{{selectedHistory.maskedPan}}</p>
                            </div>
                        </div>
                        
                        <div class="flex w-full h-full items-center text-3xl mt-6">
                            <div class="flex  items-center justify-start text-white text-3xl">
                                <p class="ml-2">【路線】</p>
                                <p class="ml-2 border-sky-300 border-b">{{selectedHistory.routeName}}</p>
                            </div>
                        </div>
                        <div class="flex w-full h-full items-center text-3xl mt-6">
                            <div class="flex items-center w-full text-white">
                                <p class="ml-2">【乗車】</p>
                                <p v-if='selectedHistory.abtEventType == "transit_entered"' class="ml-2 border-sky-300 border-b">{{selectedHistory.stopName}}</p>
                                <p v-else class="ml-3"> - - - </p>
                            </div>
                            <div class="flex items-center w-full text-white">
                                <p class="ml-2">【降車】</p>
                                <p v-if='selectedHistory.abtEventType == "transit_exited"' class="ml-2">{{selectedHistory.stopName}}</p>
                                <p v-else class="ml-3"> - - - </p>
                            </div>
                            
                        </div>
                        <div class="flex w-full h-full justify-center items-end mt-6">
                            <div class="w-full h-full">
                                <div class="flex w-full justify-start text-2xl mt-0">
                                    <div class="flex w-full items-center justify-center text-white">
                                    <p class="ml-2">大人</p>
                                    <p class="ml-2"> : </p>
                                    <p class="ml-2 border-sky-300 border-b">{{selectedHistory.countAdult}}</p>
                                    <p class="ml-2">人</p>
                                    </div>
                                    <div class="flex w-full items-center justify-center text-white">
                                        <p class="ml-1">大人（割）</p>
                                        <p class="ml-1"> : </p>
                                        <p class="ml-1 border-sky-300 border-b">{{selectedHistory.countAdultDiscount}}</p>
                                        <p class="ml-1">人</p>
                                    </div>
                                </div>
                                <div class="flex w-full justify-start text-2xl mt-4">
                                    <div class="flex w-full items-center justify-center text-white">
                                        <p class="ml-1">小人</p>
                                        <p class="ml-1"> : </p>
                                        <p class="ml-1 border-sky-300 border-b">{{selectedHistory.countChild}}</p>
                                        <p class="ml-1">人</p>
                                    </div>
                                    <div class="flex w-full items-center justify-center text-white">
                                        <p class="ml-1">小人（割）</p>
                                        <p class="ml-1"> : </p>
                                        <p class="ml-1 border-sky-300 border-b">{{selectedHistory.countChildDiscount}}</p>
                                        <p class="ml-1">人</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full h-full">

                                <div class="flex w-full items-center justify-end text-5xl text-white pr-10">
                                    <div class="flex items-center justify-center">
                                        <p class="ml-2">￥</p>
                                        <p class="ml-2 border-sky-300 border-b">{{selectedHistory.fareAmount}}</p>
                                        <p class="ml-2">円</p>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        
                        
                        
                        
                    </div>

                    <div id="footer" class="flex items-center p-4 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button type="button"  class="w-full h-full text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center bg-red-700">決済取消</button>
                        <button type="button" @click="cancelModal" class="w-full h-full text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-3xl font-medium px-5 py-2.5 hover:text-gray-900 focus:z-100">閉じる</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    
</template>

<style scoped>

.pagination__items-index{
    visibility: hidden;
}

button:focus {
	outline:0;
}

.prevButton,.nextButton{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}

.img-center{
    text-align: -webkit-center;
}
.customize-table {

  --easy-table-border: 0px solid #0f203b;
  --easy-table-row-border: 1px solid #051c40;

  --easy-table-header-font-size: 20px;
  --easy-table-header-height: 60px;
  --easy-table-header-font-color: #e7e8e9;
  --easy-table-header-background-color: #1b3967;

  --easy-table-body-row-font-color: #e7e8e9;
  --easy-table-body-row-background-color: #213451;
  --easy-table-body-row-height: v-bind(tableRowHeight);
  --easy-table-body-row-font-size: 30px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: rgb(161, 158, 188);

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>