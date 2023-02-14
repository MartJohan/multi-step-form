<script setup lang="ts">
import { inject } from "vue";
import type { TSelectedStepProvider } from "../../types/selectedStep";
import { selectedStepKey } from "../../keys/keys";

const step = inject<TSelectedStepProvider>(selectedStepKey);

const stepName = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
</script>

<template>
  <div
    class="h-fit w-full flex flex-row gap-x-5 justify-center md:flex-col md:gap-y-6 md:my-2"
  >
    <div
      v-for="(number, index) in step?.stepAmount"
      :key="index"
      class="text-center align-middle leading-8 font-medium text-white md:flex md:flex-row md:items-center md:gap-x-4"
    >
      <p
        :class="[
          number === step?.selectedStep.value ? 'text-black bg-pastelBlue' : '',
        ]"
        class="font-semibold border rounded-full h-8 w-8 flex-none"
      >
        {{ number }}
      </p>
      <div class="hidden md:flex md:flex-col md:justify-start">
        <p class="text-coolGray w-fit">Step {{ number }}</p>
        <p class="text-sm font-semibold w-fit truncate">
          {{ stepName[number - 1] }}
        </p>
      </div>
    </div>
  </div>
</template>
