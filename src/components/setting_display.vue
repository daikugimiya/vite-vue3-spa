<script setup lang="ts">

const props = defineProps({
  name: String,
  svgType: String
})

const type = props.svgType

</script>

<template>

    <div class="w-full h-full flex items-center">
        <div class="w-4/5 h-full flex items-center justify-center">
            <div>
                <h3 v-if="type == 'agency'" class="text-xl text-white">事業者名</h3>
                <h3 v-else-if="type == 'office'" class="text-xl text-white">営業所名</h3>
                <h3 v-else-if="type == 'vehicle'" class="text-xl text-white">車両番号</h3>
                <h3 v-else-if="type == 'serial'" class="text-xl text-white">シリアルナンバー</h3>
                <h3 v-else-if="type == 'test_mode'" class="text-xl text-white">モード</h3>
                <h3 v-else-if="type == 'production_mode'" class="text-xl text-white">モード</h3>
                <h1 class="text-xl leading-tight font-semibold pt-3 text-white">
                    <div>{{props.name}}</div>
                </h1>
            </div>
        </div>

        <div class="w-1/5 h-full flex items-center justify-center">
            <span v-if="type == 'agency'" class="inline-flex justify-center items-center  h-16 text-emerald-500">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>
            </span>
            <span v-else-if="type == 'office'" class="inline-flex justify-center items-center  h-16 text-blue-500">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            </span>
            <span v-else-if="type == 'vehicle'" class="inline-flex justify-center items-center  h-16 text-red-500">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path></svg>
            </span>
            <span v-else-if="type == 'serial'" class="inline-flex justify-center items-center  h-16 text-white">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7v6h6V7z"></path><path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"></path></svg>
            </span>
            <span v-else-if="type == 'test_mode'" class="inline-flex justify-center items-center  h-16 text-red-500">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>    
            </span>
            <span v-else-if="type == 'production_mode'" class="inline-flex justify-center items-center  h-16 text-blue-500">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>    
            </span>
        </div>
    </div>

    
</template>