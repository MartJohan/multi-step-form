<script setup lang="ts">import { selectedStepKey } from '@/keys/keys';
import type { TSelectedStepProvider } from '@/types/selectedStep';
import { inject } from 'vue';


const step = inject<TSelectedStepProvider>(selectedStepKey);

</script>

<template>
    <div 
    v-if="step"
    :class="[step.selectedStep.value > 1 ? 'justify-between' : 'justify-end']"
    class="h-full w-full overflow-hidden flex flex-row items-center p-2 font-semibold">
        <div 
        class="p-2"
        :class="[step.selectedStep.value > 1 ? 'block' : 'hidden']">
            <button 
            class="rounded p-2 text-coolGray self-start"
            @click="step?.previousStep">
                Go Back
            </button>
        </div>
        <div 
        class="p-2">
            <button 
            class="rounded p-2 bg-marineBlue text-white hover:cursor-pointer"
            :disabled="step.disableNext.value"
            :class="step.disableNext.value ? 'bg-opacity-75' : ''"
            @click="step?.nextStep">
                <template 
                v-if="step.selectedStep.value < 4">
                    Next Step
                </template>
                <template 
                v-if="step.selectedStep.value > 3">
                    Confirm
                </template>
            </button>
        </div>
    </div>
</template>