<script setup lang="ts">
import type { Component } from 'vue';

// Double defining this type cause of a runtime error with Vue 3, ref: https://github.com/vuejs/core/issues/4294
// This should optimally be defined a single time inside of the /types module,
// but as of 07/02/2023 it doesn't support importing types to use as a defining prop type

type TPlanItemProps = {
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    icon: Component;
    id: number;
    showMonthlyCosts: boolean;
}

const props = defineProps<TPlanItemProps>();

</script>

<template>
    <div 
    class="flex flex-row p-4 border-coolGray border rounded-lg my-2"
    @click="$emit('handleClickOnPlan', props)"
    >
        <component :is="props.icon" />
        <div class="flex flex-col mx-4">
            <h1 class="text-marineBlue font-semibold">{{ props.name }}</h1>
            <p 
            class="text-coolGray text-sm">
                ${{ showMonthlyCosts ? monthlyPrice + '/mo' : yearlyPrice + '/yr' }}
            </p>
            <p v-if="!showMonthlyCosts" class="text-marineBlue text-xs">2 months free</p>
        </div>
    </div>
</template>