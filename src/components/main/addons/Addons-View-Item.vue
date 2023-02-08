<script setup lang="ts">import { selectedMonthlyPlanKey } from '@/keys';
import type { TSelectedMonthlyPlanProvider } from '@/types';
import { inject, ref } from 'vue';


type TAddonsProps = {
    id: number,
    title: string,
    subTitle: string,
    monthlyPrice: number,
    yearlyPrice: number,
}

const props = defineProps<TAddonsProps>();
const selectedMonthlyPlan = inject<TSelectedMonthlyPlanProvider>(selectedMonthlyPlanKey);
const checked = ref(false);

const localCheckboxChange = () => {
    checked.value = !checked.value
}

</script>

<template>
    <div class="flex flex-row border border-coolGray rounded-lg p-2 my-2 items-center justify-between"
        :class="checked ? 'bg-magnolia border-purplishBlue' : ''">
        <input 
            type="checkbox" 
            name="addonCheckbox" 
            :value="props"
            @change="(event) => { localCheckboxChange(); $emit('checkboxChange', props, checked) }"
            class="p-2 m-2 checked:bg-purplishBlue checked:ring-0 focus:ring-0"
            :class="checked ? 'text-purplishBlue' : ''"
            >
        
        <div class="flex flex-col">
            <p class="font-semibold text-marineBlue">
                {{ props.title }}
            </p>
            <p class="text-sm text-coolGray">
                {{ props.subTitle }}
            </p>
        </div>
        <p class="text-purplishBlue text-sm">
            +${{ selectedMonthlyPlan?.selectedMonthlyPlan.value ? props.monthlyPrice + '/mo' : props.yearlyPrice + '/yr' }}
        </p>
    </div>
</template>