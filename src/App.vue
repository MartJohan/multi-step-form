<script setup lang="ts">
import StepBanner from './components/header/Step-banner.vue';
import Footer from './components/footer/Footer.vue';
import MainView from './components/main/Main-View.vue';
import type { TSelectedStep } from './types/selectedStep'
import { selectedStepKey } from './keys/keys'

import { provide, ref } from 'vue'

const selectedStep = ref(1);
const numbers = [1,2,3,4]
const stepAmount = numbers.length;

const nextStep = () => {
  if(selectedStep.value < stepAmount) {
    selectedStep.value += 1;
  }
}

const previousStep = () => {
  if(selectedStep.value <= stepAmount) {
    selectedStep.value -= 1
  }
}

provide<TSelectedStep>(selectedStepKey, {
  selectedStep,
  stepAmount,
  nextStep,
  previousStep
});

</script>

<template>
    <div class="h-full w-full overflow-hidden flex flex-col font-ubuntu text-base">
      <StepBanner class="h-2/6"></StepBanner>
      <MainView></MainView>
      <Footer class="h-1/6"></Footer>
    </div>
</template>

