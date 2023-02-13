<script setup lang="ts">import { selectedStepKey } from '@/keys/keys';
import type { TSelectedStepProvider } from '@/types/selectedStep';
import { computed, inject, reactive, readonly, ref, watchEffect } from 'vue';


const step = inject<TSelectedStepProvider>(selectedStepKey);


const lastStep = ref(step?.selectedStep.value! > 3);
const disableNext = ref(step?.disableNext.value);
const currentStep = ref(step?.selectedStep.value)

// (Most likely) Not optimal for setting the updated values of the selected step, but the refs are not getting updated by themselves so this function is needed.
watchEffect(() => {
    lastStep.value = step?.selectedStep.value! > 3;
    disableNext.value = step?.disableNext.value
})

const buttonClassObject = computed(() => ({
    'bg-purplishBlue': lastStep.value,
    'bg-marineBlue': !lastStep.value,
    'bg-opacity-75': disableNext.value
}))

</script>

<template>
    <div v-if="step" :class="[step.selectedStep.value > 1 ? 'justify-between' : 'justify-end']"
        class="h-full w-full overflow-hidden flex flex-row items-center p-2 font-semibold
        xl:max-w-[75%] xl:mx-auto xl:p-8">
        <div class="p-2" :class="[step.selectedStep.value > 1 ? 'block' : 'hidden']">
            <button class="rounded p-2 text-coolGray self-start xl:font-normal" @click="step?.previousStep">
                Go Back
            </button>
        </div>
        <div class="p-2">
            <button class="rounded p-2 text-white hover:cursor-pointer font-semibold
            xl:font-normal xl:text-sm xl:rounded-lg xl:p-3 xl:px-4" :disabled="step.disableNext.value"
                :class="buttonClassObject"
                @click="step?.selectedStep.value !== step?.stepAmount ? step?.nextStep() : step?.setFinal()">
                <template v-if="!lastStep">
                    Next Step
                </template>
                <template v-if="lastStep">
                    Confirm
                </template>
            </button>
        </div>
    </div>
</template>