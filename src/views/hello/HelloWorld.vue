<script setup lang="ts">
import { ref } from 'vue'

const title = "Hello World :)"
const summary = "This Page is PT-850 Web Site"
const cpyright = "hosting by uvicorn"

const count = ref(0)
</script>

<template>
  <h1>{{title}}</h1>
  <h2>{{summary}}</h2>
  <h3>{{cpyright}}</h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
