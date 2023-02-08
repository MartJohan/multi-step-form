import type { Ref } from "vue"

export type TSelectedStepProvider = {
    selectedStep: Ref<number>;
    stepAmount: number;
    nextStep: () => void;
    previousStep: () => void;
    disableNext: Ref<boolean>;
}