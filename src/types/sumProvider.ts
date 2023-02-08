import type { Ref } from "vue";

export type TSumProvider = {
    sum: Ref<number>;
    getMonthlySum: () => number;
    getYearlySum: () => number;
}