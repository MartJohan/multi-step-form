<script setup lang="ts">
import BGSidebarMobile from '@/assets/images/bg-sidebar-mobile.svg';
import BGSidebarDesktop from '@/assets/images/bg-sidebar-desktop.svg'
import { ref } from 'vue';
import StepBannerSteps from './Step-banner-steps.vue';

const screenWidth = ref(window.innerWidth);

</script>

<template>
    <div class="h-full w-full overflow-hidden -z-10 relative">
        <div 
        :style="{ backgroundImage: screenWidth < 1280 ? `url(${BGSidebarMobile})` : `url(${BGSidebarDesktop})` }" 
        class="h-full w-full flex bg-cover bg-no-repeat xl:bg-contain">
            <StepBannerSteps class="p-6"></StepBannerSteps>
        </div>
    </div>
</template>