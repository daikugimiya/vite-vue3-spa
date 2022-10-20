<script setup lang="ts">
import HistorySideBar from './HistorySideBar.vue'
</script>
    
<template>
  <div class="flex w-full h-screen bg-gradient-to-br from-cyan-900 to-gray-800">
  
    <div class="w-1/5 h-screen p-2">
      <HistorySideBar></HistorySideBar>
    </div>

    <div class="flex w-4/5 h-screen p-2">
      <router-view></router-view>
    </div>

  </div>
</template>
    
<style scoped>
</style>
    