<script setup lang="ts">
import { inject } from 'vue'
import type { TSelectedStepProvider } from '../../types/selectedStep'
import { selectedStepKey } from '../../keys/keys'


const step = inject<TSelectedStepProvider>(selectedStepKey);

</script>

<template>
    <div class="h-fit w-full flex flex-row gap-x-5 justify-center">
        <div 
        v-for="(number, index) in step?.stepAmount"
        :class="[number === step?.selectedStep.value ? 'bg-pastelBlue' : '']"
        class="border border-white rounded-full h-8 w-8 text-center align-middle leading-8 font-medium text-white">
                <p 
                :class="[number === step?.selectedStep.value ? 'text-black' : '']"
                class="font-semibold"
                >
                    {{ number }}
                </p>
        </div>
    </div>
</template>