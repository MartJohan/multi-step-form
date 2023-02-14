<script setup lang="ts">
import type {
  TPlan,
  TPlanProvider,
  TSelectedMonthlyPlanProvider,
} from "@/types";
import ItemIconArcade from "../../utils/Item-Icon-Arcade.vue";
import ItemIconPro from "../../utils/Item-Icon-Pro.vue";
import ItemIconAdvanced from "../../utils/Item-Icon-Advanced.vue";
import PlanViewItems from "./Plan-View-Items.vue";
import FormButtonSliderToggle from "../../utils/Form-Button-Slider-Toggle.vue";
import { inject, ref } from "vue";
import { selectedMonthlyPlanKey, selectedPlanKey } from "@/keys";

const selectedPlan = inject<TPlanProvider>(selectedPlanKey);
const selectedMonthlyPlan = inject<TSelectedMonthlyPlanProvider>(
  selectedMonthlyPlanKey
);
const clickedPlan = ref<number | undefined>(
  selectedPlan?.selectedPlan.value.id
);

const plans: TPlan[] = [
  {
    id: 1,
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: ItemIconArcade,
  },
  {
    id: 2,
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: ItemIconAdvanced,
  },
  {
    id: 3,
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: ItemIconPro,
  },
];

const handleClickOnPlan = (plan: TPlan) => {
  clickedPlan.value = plan.id;
  selectedPlan?.setSelectedPlan(plan);
};

const handleSliderToggleClick = (showMonthlycostToggle: boolean) => {
  selectedMonthlyPlan?.setSelectedMonthlyPlan(showMonthlycostToggle);
};

const ToggledText = "text-marineBlue font-semibold text-sm";
const nonToggledText = "text-coolGray font-semibold text-sm";
</script>

<template>
  <div class="flex flex-col xl:gap-y-4">
    <div class="flex flex-col xl:flex-row">
      <PlanViewItems
        v-for="(plan, index) in plans"
        :id="plan.id"
        :name="plan.name"
        :monthly-price="plan.monthlyPrice"
        :yearly-price="plan.yearlyPrice"
        :icon="plan.icon!"
        :key="index"
        :show-monthly-costs="selectedMonthlyPlan?.selectedMonthlyPlan.value!"
        @handle-click-on-plan="handleClickOnPlan"
        :class="
          typeof clickedPlan === 'number' && clickedPlan === plan.id
            ? 'bg-magnolia border-purplishBlue'
            : ''
        "
      />
    </div>
    <div
      class="flex flex-row w-full bg-magnolia justify-center p-2 gap-x-4 items-center"
    >
      <p
        :class="selectedMonthlyPlan?.selectedMonthlyPlan.value! ? ToggledText : nonToggledText"
      >
        Monthly
      </p>
      <FormButtonSliderToggle
        @handle-slider-toggle-click="handleSliderToggleClick"
        :current-value="selectedMonthlyPlan?.selectedMonthlyPlan.value!"
      />
      <p
        :class="selectedMonthlyPlan?.selectedMonthlyPlan.value! ? nonToggledText : ToggledText"
      >
        Yearly
      </p>
    </div>
  </div>
</template>
