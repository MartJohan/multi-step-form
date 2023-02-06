import type { Ref } from "vue";
import type { TPersonalia } from "./personalia";


export type TPersonaliaProvider = {
    personalia: Ref<TPersonalia>;
    setPersonalia: (personalia: TPersonalia) => void
  }