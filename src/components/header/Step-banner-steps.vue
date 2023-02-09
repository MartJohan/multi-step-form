<script setup lang="ts">
import { inject } from 'vue'
import type { TSelectedStepProvider } from '../../types/selectedStep'
import { selectedStepKey } from '../../keys/keys'


const step = inject<TSelectedStepProvider>(selectedStepKey);

const stepName = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]

</script>

<template>
    <div class="h-fit w-full flex flex-row gap-x-5 justify-center xl:flex-col xl:gap-y-10 xl:my-2">
        <div 
        v-for="(number, index) in step?.stepAmount"
        class=" text-center align-middle leading-8 font-medium text-white 
        xl:flex xl:flex-row xl:items-center xl:gap-x-4">
                <p 
                :class="[number === step?.selectedStep.value ? 'text-black bg-pastelBlue' : '', ]"
                class="font-semibold border rounded-full h-8 w-8"
                >
                    {{ number }}
                </p>
                <div class="hidden xl:flex xl:flex-col xl:justify-start">
                    <p class="text-coolGray w-fit">
                        Step {{ step?.selectedStep.value }}
                    </p>
                    <p class="text-sm font-semibold w-fit">
                        {{ stepName[step?.selectedStep.value!] }}
                    </p>
            </div>
        </div>
        
    </div>
</template>