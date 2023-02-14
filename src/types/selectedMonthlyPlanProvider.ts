import type { Ref } from "vue";

export type TSelectedMonthlyPlanProvider = {
  selectedMonthlyPlan: Ref<boolean>;
  setSelectedMonthlyPlan: (value: boolean) => void;
};
