<script setup lang="ts">
import PaymentSideBar from './PaymentSideBar.vue'
</script>
    
<template>

  <div id="teleport-target"></div>

  <div class="flex w-full h-screen bg-app">

    <div class="w-1/5 h-screen p-2">
      <PaymentSideBar></PaymentSideBar>
    </div>

    <div class="flex w-4/5 h-screen p-2 ">
      <router-view></router-view>
    </div>

  </div>
</template>
        