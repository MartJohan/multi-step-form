<script setup lang="ts">

import type { TPlan } from '@/types';
import ItemIconArcade  from '../../utils/Item-Icon-Arcade.vue'
import ItemIconPro  from '../../utils/Item-Icon-Pro.vue'
import ItemIconAdvanced  from '../../utils/Item-Icon-Advanced.vue'
import PlanViewItems from './Plan-View-Items.vue';
import FormButtonSliderToggle from '../../utils/Form-Button-Slider-Toggle.vue';
import { ref } from 'vue';

const clickedPlan = ref<number | undefined>(undefined);
const showMonthlycost = ref<boolean>(true)

const plans: TPlan[] = [
    {
        id: 1,
        name: "Arcade",
        monthlyPrice: 9,
        yearlyPrice: 90,
        icon: ItemIconArcade
    },
    {
        id: 2,
        name: "Advanced",
        monthlyPrice: 12,
        yearlyPrice: 120,
        icon: ItemIconAdvanced
    },
    {
        id: 3,
        name: "Pro",
        monthlyPrice: 15,
        yearlyPrice: 150,
        icon: ItemIconPro
    }
]

const handleClickOnPlan = (planId: number) => {
    clickedPlan.value = planId
}

const handleSliderToggleClick = (showMonthlycostToggle: boolean) => {
    showMonthlycost.value = showMonthlycostToggle
}

const ToggledText = "text-marineBlue font-semibold text-sm";
const nonToggledText = "text-coolGray font-semibold text-sm"

</script>

<template>
    <div class="flex flex-col">
            <PlanViewItems v-for="(plan, index) in plans" 
            :id="plan.id"
            :name="plan.name" 
            :monthly-price="plan.monthlyPrice"
            :yearly-price="plan.yearlyPrice"
            :icon="plan.icon" 
            :key="index"
            :show-monthly-costs="showMonthlycost"
            @handle-click-on-plan="handleClickOnPlan"
            :class="typeof clickedPlan === 'number' && clickedPlan === plan.id ? 'bg-magnolia border-purplishBlue' : ''"
            />
            <div class="flex flex-row w-full bg-magnolia justify-center p-2 gap-x-4 items-center">
                <p :class="showMonthlycost ? ToggledText : nonToggledText">Monthly</p>
                <FormButtonSliderToggle 
                @handle-slider-toggle-click="handleSliderToggleClick" 
                :current-value="showMonthlycost"/>
                <p :class="showMonthlycost ? nonToggledText : ToggledText">Yearly</p>
            </div>
    </div>
</template>