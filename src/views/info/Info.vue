<script setup lang="ts">
import InfoSideBarVue from './InfoSideBar.vue';
</script>
    
<template>
  <div class="flex w-full h-screen">
    
    <div class="w-1/5 h-screen p-2">
      <InfoSideBarVue></InfoSideBarVue>
    </div>
    <div class="flex w-4/5 h-screen p-2">
      <router-view></router-view>
    </div>
    
  </div>
</template>
    
<style scoped>

</style>
    