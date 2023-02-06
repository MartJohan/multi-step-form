import type { TPersonalia, TSelectedStep } from "@/types";
import type { InjectionKey } from "vue";


export const selectedStepKey = Symbol() as InjectionKey<TSelectedStep>
export const personaliaKey = Symbol() as InjectionKey<TPersonalia>