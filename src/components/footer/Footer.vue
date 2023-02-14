<script setup lang="ts">
import { selectedStepKey } from "@/keys/keys";
import type { TSelectedStepProvider } from "@/types/selectedStep";
import { computed, inject, ref, watchEffect } from "vue";

const step = inject<TSelectedStepProvider>(selectedStepKey);

const lastStep = ref(step?.selectedStep.value! > 3);
const disableNext = ref(step?.disableNext.value);

// (Most likely) Not optimal for setting the updated values of the selected step, but the refs are not getting updated by themselves so this function is needed.
watchEffect(() => {
  lastStep.value = step?.selectedStep.value! > 3;
  disableNext.value = step?.disableNext.value;
});

const buttonClassObject = computed(() => ({
  "bg-purplishBlue hover:bg-opacity-50": lastStep.value, // Applied when we're at the last step
  "bg-marineBlue": !lastStep.value, // Applied when we're not on the last step
  "bg-opacity-75": disableNext.value, // Applied when the button's supposed to be disabled
}));
</script>

<template>
  <div v-if="step" :class="[step.selectedStep.value > 1 ? 'justify-between' : 'justify-end']"
    class="h-full w-full overflow-hidden flex flex-row items-center p-2 font-semibold md:max-w-[75%] md:mx-auto md:p-8">
    <div class="p-2" :class="[step.selectedStep.value > 1 ? 'block' : 'hidden']">
      <button class="rounded p-2 text-coolGray self-start md:font-normal" @click="step?.previousStep">
        Go Back
      </button>
    </div>
    <div class="p-2">
      <button
        class="rounded p-2 text-white hover:cursor-pointer font-semibold md:font-normal md:text-sm md:rounded-lg md:p-3 md:px-4"
        :disabled="step.disableNext.value" :class="buttonClassObject" @click="
          step?.selectedStep.value !== step?.stepAmount
            ? step?.nextStep()
            : step?.setFinal()
        ">
        <template v-if="!lastStep"> Next Step </template>
        <template v-if="lastStep"> Confirm </template>
      </button>
    </div>
  </div>
</template>
