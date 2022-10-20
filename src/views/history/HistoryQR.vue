<script setup lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

const loading = ref(true)

const headers: Header[] = [
      { text: "時刻", value: "time",sortable: true},
      { text: "チケット名", value: "ticketName"},
      { text: "利用", value: "usage"},
      { text: "可否", value: "result"},
      { text: "取消", value: "cancel"},
    ];

// 表示用 リアクティブ
// let histories : History[]= ref([]);


// 表示用 リアクティブ
let histories = ref([
    {
        time:"2020",
        ticketName:"test",
        usage:"乗車",
    }
]);

const themeColor = "#f48225"

// test data load
setTimeout(() => {
    loading.value = false
    histories.value = []
    let datas = []
    for(var i = 0; i < 100; i++){
        datas.push(
            {
                time:"2020-10-12 15:02",
                ticketName:"大分駅 - 大分空港 大人 4枚",
                usage:"降車",
                cancelable:true,
                result:true,
            }
        )
    }
    histories.value = datas
    
}, 2000);

</script>

<template>

    <div class="w-full h-full p-5">
        <EasyDataTable
            table-class-name="customize-table"
            header-text-direction="center"
            body-text-direction="center"
            table-height=340
            :headers="headers"
            :items="histories"
            :theme-color="themeColor"
            :loading="loading"
            rows-per-page-message=""
            rows-of-page-separator-message=""
            >

        <template #item-result="{result}">
        <div class="operation-wrapper">
            <div v-if="result" class="img-center">
                OK
            </div>
            <div v-else class="img-center">
                NG
            </div>
        </div>
        </template>

        <template #item-cancel="{cancel}">
            <div class="operation-wrapper">
                <div v-if="cancel" class="img-center">
                    可能
                </div>
                <div v-else class="img-center">
                    不可
                </div>
            </div>
        </template>
        
        <template #item-detail>
            <div class="operation-wrapper">
                <div class="img-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" stroke-width="2" 
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z">
                    </path>
                    </svg>
                </div>
            </div>
        </template>
        
        
        </EasyDataTable>
    </div>
    
</template>

<style scoped>

table{
    height: 80%;
}

.img-center{
    text-align: -webkit-center;
}
.customize-table {
    height: 100%;
  --easy-table-border: 0px solid #0f203b;
  --easy-table-row-border: 1px solid #0f203b;

  --easy-table-header-font-size: 20px;
  --easy-table-header-height: 60px;
  --easy-table-header-font-color: #e7e8e9;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 55px;
  --easy-table-body-row-font-size: 17px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 19px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 100px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>