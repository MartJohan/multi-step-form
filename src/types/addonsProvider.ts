import type { TAddons } from "@/types"

export type TAddonsProvider = {
    selectedAddons: TAddons[];
    AddAddonToSelected: (addon: TAddons) => void;
    RemoveAddonFromSelected: (addonId: number) => void
}