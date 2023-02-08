import type { TAddons, TPersonalia, TSelectedStepProvider } from "@/types";
import type { InjectionKey } from "vue";


export const selectedStepKey = Symbol() as InjectionKey<TSelectedStepProvider>;
export const personaliaKey = Symbol() as InjectionKey<TPersonalia>;
export const selectedMonthlyPlanKey = Symbol() as InjectionKey<boolean>;
export const selectedPlanKey = Symbol() as InjectionKey<TPlan>;