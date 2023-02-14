import type { Ref } from "vue";

export type TSelectedStepProvider = {
  selectedStep: Ref<number>;
  stepAmount: number;
  nextStep: () => void;
  previousStep: () => void;
  disableNext: Ref<boolean>;
  final: Ref<boolean>;
  setFinal: () => void;
  setStep: (value: number) => void;
};
