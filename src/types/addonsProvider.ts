import type { TAddons } from "@/types"
import type { Ref } from "vue";

export type TAddonsProvider = {
    selectedAddons: Ref<TAddons[]>;
    AddAddonToSelected: (addon: TAddons) => void;
    RemoveAddonFromSelected: (addonId: number) => void
}