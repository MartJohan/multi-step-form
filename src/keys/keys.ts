import type { TPersonalia, TSelectedStepProvider } from "@/types";
import type { InjectionKey } from "vue";


export const selectedStepKey = Symbol() as InjectionKey<TSelectedStepProvider>;
