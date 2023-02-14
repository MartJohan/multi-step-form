import type { Ref } from "vue";
import type { TPlan } from "./plan";

export type TPlanProvider = {
  selectedPlan: Ref<TPlan>;
  setSelectedPlan: (plan: TPlan) => void;
};
