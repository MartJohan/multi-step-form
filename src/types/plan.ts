import type { Component } from "vue";

export type TPlan = {
    id: number;
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    icon: Component | undefined;
}