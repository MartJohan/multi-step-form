<script setup lang="ts">
import StepBanner from './components/header/Step-banner.vue';
import Footer from './components/footer/Footer.vue';
import MainView from './components/main/Main-View.vue';
import type { TSelectedStepProvider, TPersonalia, TPersonaliaProvider, TSelectedMonthlyPlanProvider, TAddons, TAddonsProvider } from '@/types'
import { selectedStepKey, personaliaKey, selectedMonthlyPlanKey, selectedAddonsKey } from '@/keys'

import { provide, ref } from 'vue'

/* Currently selected step */
const steps = [1, 2, 3, 4]
const stepAmount = steps.length;
const disableNext = ref(true);

const nextStep = () => {
  if (selectedStep.value < stepAmount) {
    selectedStep.value += 1;
  }
}

const previousStep = () => {
  if (selectedStep.value <= stepAmount) {
    selectedStep.value -= 1
  }
}

provide<TSelectedStepProvider>(selectedStepKey, {
  selectedStep,
  stepAmount,
  nextStep,
  previousStep,
  disableNext
});

/* Getter / Setter for personal information */

const personalia = ref<NonNullable<TPersonalia>>({
  name: '',
  email: '',
  phoneNumber: '',
});

const setPersonalia = (personaliaFromChild: TPersonalia) => {
  personalia.value = personaliaFromChild
}

provide<TPersonaliaProvider>(personaliaKey, { personalia, setPersonalia });

/* Getter / Setter for currently selected plan */

const selectedPlan = ref<TPlan>({
  id: 0,
  name: '',
  monthlyPrice: 0,
  yearlyPrice: 0,
  icon: undefined
});

const setSelectedPlan = (plan: TPlan) => {
  console.log("plan", plan)
  selectedPlan.value = plan;
}

provide<TPlanProvider>(selectedPlanKey, {
  selectedPlan,
  setSelectedPlan
});

/* Getter / Setter for having a monthly or yearly plan. If true, the selected plan will be monthly, if false, the plan will be yearly */

const selectedMonthlyPlan = ref(true);

const setSelectedMonthlyPlan = (value: boolean) => {
  selectedMonthlyPlan.value = value
}

provide<TSelectedMonthlyPlanProvider>(selectedMonthlyPlanKey, {
  selectedMonthlyPlan,
  setSelectedMonthlyPlan
});

/* Currently selected addons array */

const selectedAddons: TAddons[] = [];

const AddAddonToSelected = (addon: TAddons) => {
  selectedAddons.push(addon)
}

const RemoveAddonFromSelected = (addonId: number) => {
  selectedAddons.filter(addon => addon.id !== addonId);
}

provide<TAddonsProvider>(selectedAddonsKey, {
  selectedAddons,
  AddAddonToSelected,
  RemoveAddonFromSelected
});

</script>

<template>
    <div class="h-full w-full overflow-hidden flex flex-col font-ubuntu text-base">
      <StepBanner class="h-2/6"></StepBanner>
      <MainView></MainView>
      <Footer class="h-1/6"></Footer>
    </div>
</template>

