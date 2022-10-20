<script setup lang="ts">
import setting_button from '../../components/setting_button.vue';
import setting_state_span from '../../components/setting_state_span.vue';
import setting_display from '../../components/setting_display.vue';


</script>

<template>
    <div class="overflow-x-auto w-full rounded-lg ">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6 p-5">
            <div id="cardContainer" class="rounded-2xl flex-col 00 flex bg-card-color">
                <div class="flex p-6 justify-around">
                    <setting_state_span class="w-1/5"></setting_state_span>
                
                    <setting_display class="w-4/5" name="(株)チョットデキル" svgType="agency"></setting_display>
                </div>
            </div>
            <div id="cardContainer" class="rounded-2xl flex-col bg-card-color flex">
                <div class="flex p-6 justify-around">
                    <setting_state_span class="w-1/5"></setting_state_span>
                
                    <setting_display class="w-4/5" name="スコシデキル営業所" svgType="office"></setting_display>
                </div>
            </div>
            <div id="cardContainer" class="rounded-2xl flex-col bg-card-color flex">
                <div class="flex p-6 justify-around">
                    <setting_state_span class="w-1/5"></setting_state_span>
                
                    <setting_display class="w-4/5" name="6112" svgType="vehicle"></setting_display>
                </div>
            </div>
            <div id="cardContainer" class="rounded-2xl flex-col bg-card-color flex ">
                <div class="flex p-6 justify-around">
                    <setting_state_span class="w-1/5"></setting_state_span>
                
                    <setting_display class="w-4/5" name="840347849-43842370-3481348" svgType="serial"></setting_display>
                
                </div>
            </div>
            <div id="cardContainer" class="rounded-2xl flex-col bg-card-color flex">
                <div class="flex p-6 justify-around">
                    <setting_state_span class="w-1/5"></setting_state_span>
                
                    <setting_display class="w-4/5" name="プロダクション" svgType="production_mode"></setting_display>
                </div>
            </div>
            <div id="cardContainer" class="rounded-2xl flex-col bg-card-color flex">
                <div class="flex p-6 justify-around">
                    <setting_state_span class="w-1/5"></setting_state_span>
                
                    <setting_display class="w-4/5" name="テストモード" svgType="test_mode"></setting_display>
                </div>
            </div>
        </div>
    </div>
</template>