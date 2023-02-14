<script setup lang="ts">
import BGSidebarMobile from "@/assets/images/bg-sidebar-mobile.svg";
import BGSidebarDesktop from "@/assets/images/bg-sidebar-desktop.svg";
import { ref } from "vue";
import StepBannerSteps from "./Step-banner-steps.vue";

const mobile = ref(window.innerWidth <= 375)

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if(width > 375) {
    return mobile.value = false;
  } 

  return mobile.value = true
});

</script>

<template>
  <div
    class="w-full overflow-hidden relative h-2/6 md:h-auto md:rounded-xl md:basis-1/3 md:z-0"
  >
    <div
      :style="{
        backgroundImage:
        mobile
            ? `url(${BGSidebarMobile})`
            : `url(${BGSidebarDesktop})`,
      }"
      class="h-full w-full flex bg-cover bg-no-repeat bg-center"
    >
      <StepBannerSteps class="p-6"></StepBannerSteps>
    </div>
  </div>
</template>
