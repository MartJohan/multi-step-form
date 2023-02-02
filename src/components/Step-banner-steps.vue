<script setup lang="ts">
import { inject } from 'vue'
import type { TSelectedStep } from '../types/selectedStep'
import { selectedStepKey } from '../keys/keys'


const step = inject<TSelectedStep>(selectedStepKey);

</script>

<template>
    <div class="h-fit w-full flex flex-row gap-x-5 justify-center">
        <div 
        v-for="(number, index) in step?.stepAmount"
        :class="[number === step?.selectedStep.value ? 'bg-pastelBlue text-black' : '']"
        class="border border-white rounded-full h-8 w-8 text-center align-middle leading-8 font-medium text-white">
                <p>
                    {{ number }}
                </p>
        </div>
    </div>
</template>