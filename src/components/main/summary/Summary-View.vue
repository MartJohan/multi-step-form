<script setup lang="ts">
import { selectedAddonsKey, selectedMonthlyPlanKey, selectedPlanKey, sumKey } from '@/keys';
import type { TAddonsProvider, TPlanProvider, TSelectedMonthlyPlanProvider, TSumProvider } from '@/types';
import SummaryViewAddons from './Summary-View-Addons.vue'
import { inject } from 'vue';


const selectedPlan = inject<TPlanProvider>(selectedPlanKey)!;
const selectedMonthlyPlan = inject<TSelectedMonthlyPlanProvider>(selectedMonthlyPlanKey)!;
const selectedAddons  = inject<TAddonsProvider>(selectedAddonsKey)!;
const sum = inject<TSumProvider>(sumKey);

</script>

<template>
    <div class="flex flex-col">
        <div class="bg-magnolia flex flex-col rounded-lg divide-y divide-coolGray divide-opacity-50 p-2">
            <div class="flex flex-row justify-between text-sm">
                <div class="flex flex-col p-2">
                    <p class="text-marineBlue font-semibold">
                        {{ selectedPlan.selectedPlan.value.name }}
                        <span>{{ selectedMonthlyPlan.selectedMonthlyPlan.value ? '(Monthly)' : '(Yearly)' }}</span>
                    </p>
                    <p class="text-coolGray underline">Change</p>
                </div>
                <p class="p-2 text-marineBlue font-semibold">
                    {{ selectedMonthlyPlan.selectedMonthlyPlan.value ? selectedPlan.selectedPlan.value.monthlyPrice + '/mo' 
                    : selectedPlan.selectedPlan.value.yearlyPrice + '/yr' }}
                </p>
            </div>
            <div class="flex flex-col">
                <SummaryViewAddons 
                v-if="selectedAddons.selectedAddons.value.length" 
                v-for="addon in selectedAddons.selectedAddons.value" 
                :addon="addon" :show-monthly="selectedMonthlyPlan.selectedMonthlyPlan.value" />
                <p v-if="!selectedAddons.selectedAddons.value.length" class="w-full text-center p-2">
                    No addons chosen
                </p>

            </div>
        </div>
        <div class="flex flex-row p-2 my-2 text-coolGray justify-between">
            <p>
                Total <span>{{ selectedMonthlyPlan.selectedMonthlyPlan.value ? '(per month)' : '(per year)' }}</span>
            </p>
            <p class="text-purplishBlue font-semibold">
                +${{ selectedMonthlyPlan.selectedMonthlyPlan.value 
                ? sum?.getMonthlySum() + '/mo'
                : sum?.getYearlySum() + '/yr' }}
            </p>
        </div>
    </div>
</template>