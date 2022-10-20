<script setup lang="ts">
import { defineComponent, ref, reactive, toRefs,computed,onMounted } from "vue";
import SampleApiService from '../../services/SampleApiService';
import ResponseData from '../../types/ResponseData'

import type { Header, Item } from "vue3-easy-data-table";

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


const loading = ref(true)



const headers: Header[] = [
      { text: "時刻", value: "time",sortable: true},
      { text: "路線", value: "muskedPan"},
      { text: "利用", value: "usage"},
      { text: "可否", value: "result"},
    //   { text: "取消", value: "cancel"},
    ];

// 表示用 リアクティブ
// let histories : History[]= ref([]);


// 表示用 リアクティブ
let histories = ref([
    {
        time:"2020",
        muskedPan:"test",
        usage:"乗車",
    }
]);

// test data load
setTimeout(() => {

    loading.value = false
    histories.value = []
    let datas = []
    for(var i = 0; i < 100; i++){
        datas.push(
            {
                time:"10/14 13:52",
                muskedPan:"三重町～大野町",
                usage:"開始",
                cancelable:false,
                result:true,
            }
        )
    }
    histories.value = datas
    
}, 2000);

// tableのサイズを動的に生成
const table_head_body_foot = ref<HTMLDivElement>()
const tableHeaderBodyHeight = ref(0)
const tableRowHeight = ref('')


onMounted(() => {

    // SampleApiService.getCreditHistory(1)
    // .then(
    // (response:ResponseData) => {
    //     console.log(response)

    //     Tapdatas.value = response.data
    //     console.info("タップデータ取得結果")

    //     console.log(Tapdatas)
    // }
    // )
    // .catch(
    //     error => console.log(error)
    // )

    const tableALLHeight = table_head_body_foot.value?.clientHeight
    if (tableALLHeight != undefined){
        tableHeaderBodyHeight.value = tableALLHeight * 0.8333333 // 5/6をヘッダー + ボディとして設定できる
        tableRowHeight.value = ((tableHeaderBodyHeight.value - 60) * 0.2).toString() + 'px' // ヘッダーを決め打ち60px
    }
    
})

</script>

<template>
    <div ref="table_head_body_foot" class="w-full rounded-lg overflow-hidden">
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
            >

                <template #item-result="{result}">
                <div class="operation-wrapper">
                    <div v-if="result" class="img-center">
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