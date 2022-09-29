<script setup lang="ts">
import HistorySideBar from './HistorySideBar.vue'
</script>
    
<template>
  <div class="container">
    <HistorySideBar></HistorySideBar>
    <router-view></router-view>
  </div>
</template>
    
<style scoped>

.container{
  display: flex
}

</style>
    