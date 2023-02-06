<script setup lang="ts">
import BGSidebarMobile from '@/assets/images/bg-sidebar-mobile.svg';
import StepBannerSteps from './Step-banner-steps.vue';
</script>

<template>
    <div class="h-full w-full overflow-hidden">
        <div 
        :style="{ backgroundImage: `url(${BGSidebarMobile})` }" 
        class="h-full w-full flex bg-cover bg-no-repeat">
            <StepBannerSteps class="p-6"></StepBannerSteps>
        </div>
    </div>
</template>