<script setup lang="ts">
import StepBanner from './components/header/Step-banner.vue';
import Footer from './components/footer/Footer.vue';
import MainView from './components/main/Main-View.vue';
import type { TSelectedStepProvider, TPersonalia, TPersonaliaProvider, TSelectedMonthlyPlanProvider, TAddons, TAddonsProvider, TPlan, TPlanProvider, TSumProvider } from '@/types'
import { selectedStepKey, personaliaKey, selectedMonthlyPlanKey, selectedAddonsKey, selectedPlanKey, sumKey } from '@/keys'

import { provide, ref } from 'vue'

//TODO: Branch this out into stores

/* Currently selected step */
const selectedStep = ref(1);
const steps = [1, 2, 3, 4]
const stepAmount = steps.length;
const disableNext = selectedStep.value > 1 ? ref(false) : ref(true);
const final = ref(false);

const nextStep = () => {
  if (selectedStep.value < stepAmount) {
    selectedStep.value += 1;
  }
}

const previousStep = () => {
  if (selectedStep.value <= stepAmount) {
    selectedStep.value -= 1;
    if (final.value) final.value = false;
  }
}

const setStep = (value: number) => {
  if(value > stepAmount || value < 1) return;
  selectedStep.value = value
}

const setFinal = () => {
  final.value = true
}

provide<TSelectedStepProvider>(selectedStepKey, {
  selectedStep,
  stepAmount,
  nextStep,
  previousStep,
  disableNext,
  final,
  setFinal,
  setStep
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

const getSumOfPlan = () => {
  if (selectedMonthlyPlan) return selectedPlan.value.monthlyPrice
  return selectedPlan.value.yearlyPrice;
}

provide<TSelectedMonthlyPlanProvider>(selectedMonthlyPlanKey, {
  selectedMonthlyPlan,
  setSelectedMonthlyPlan
});

/* Currently selected addons array */

const selectedAddons = ref<TAddons[]>([]);

const AddAddonToSelected = (addon: TAddons) => {
  selectedAddons.value.push(addon);
}

const RemoveAddonFromSelected = (addonId: number) => {
  selectedAddons.value = selectedAddons.value.filter(addon => addon.id !== addonId);
}

const GetSumOfMonthlyAddons = () => {
  let sum = 0;
  selectedAddons.value.map(addon => sum += addon.monthlyPrice);
  return sum;
}

const getSumOfYearlyAddons = () => {
  let sum = 0;
  selectedAddons.value.map(addon => sum += addon.yearlyPrice);
  return sum
}

provide<TAddonsProvider>(selectedAddonsKey, {
  selectedAddons,
  AddAddonToSelected,
  RemoveAddonFromSelected,
});

const sum = ref(0);

const getMonthlySum = () => {
  return sum.value = GetSumOfMonthlyAddons() + getSumOfPlan()
}

const getYearlySum = () => {
  return sum.value = getSumOfYearlyAddons() + getSumOfPlan();
}

provide<TSumProvider>(sumKey, {
  sum,
  getMonthlySum,
  getYearlySum
})

</script>

<template>
  <div id="AppView" class="h-full w-full overflow-hidden flex flex-col font-ubuntu text-base bg-white rounded-xl
  xl:flex-row xl:p-4 xl:max-h-[75%] xl:max-w-[75%] xl:mx-auto">
    <StepBanner></StepBanner>
    <div id="MainViewAndFooterContainer" class="h-full w-full overflow-hidden flex flex-col
    xl:mx-auto">
      <MainView></MainView>
      <Footer v-if="!final" class="h-1/6"></Footer>
    </div>
  </div>
</template>

