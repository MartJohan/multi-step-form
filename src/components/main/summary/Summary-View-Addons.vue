<script setup lang="ts">
import type { TAddons } from "@/types";

type TSummaryAddonsProps = {
  addon: TAddons;
  showMonthly: boolean;
};

defineProps<TSummaryAddonsProps>();
</script>

<template>
  <div class="flex flex-row justify-between text-sm p-2 text-coolGray">
    <p>{{ addon.title }}</p>
    <p class="text-marineBlue">
      +${{
        showMonthly ? addon.monthlyPrice + "/mo" : addon.yearlyPrice + "yr"
      }}
    </p>
  </div>
</template>
