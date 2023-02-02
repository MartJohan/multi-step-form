import type { TSelectedStep } from "@/types/selectedStep";
import type { InjectionKey } from "vue";


export const selectedStepKey = Symbol() as InjectionKey<TSelectedStep>