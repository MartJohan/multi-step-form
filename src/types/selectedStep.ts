import type { Ref } from "vue"

export type TSelectedStep = {
    selectedStep: Ref<number>;
    stepAmount: number;
    nextStep: () => void;
    previousStep: () => void;
}