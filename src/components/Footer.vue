<script setup lang="ts">import { selectedStepKey } from '@/keys/keys';
import type { TSelectedStep } from '@/types/selectedStep';
import { inject } from 'vue';


const step = inject<TSelectedStep>(selectedStepKey);

</script>

<template>
    <div 
    v-if="step"
    :class="[step.selectedStep.value > 1 ? 'justify-between' : 'justify-end']"
    class="h-full w-full overflow-hidden flex flex-row items-center p-2 font-semibold">
        <div 
        class="p-2"
        :class="[step.selectedStep.value > 1 ? 'block' : 'hidden']">
            <button class="rounded p-2 text-coolGray self-start">
                Go Back
            </button>
        </div>
        <div class="p-2">
            <button class="rounded p-2 bg-marineBlue text-white">
                Next Step
            </button>
        </div>
    </div>
</template>