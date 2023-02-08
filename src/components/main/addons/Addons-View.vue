<script setup lang="ts">

import AddonsViewItemsVue from './Addons-View-Item.vue';
import type { TAddons, TAddonsProvider } from '@/types';
import { selectedAddonsKey } from '@/keys';
import { inject } from 'vue';

const injectedAddon = inject<TAddonsProvider>(selectedAddonsKey)

const addons: TAddons[] = [
    {
        id: 1,
        title: "Online service",
        subTitle: "Access to multiplayer games",
        monthlyPrice: 1,
        yearlyPrice: 10
    },
    {
        id: 2,
        title: "Larger storage",
        subTitle: "Extra 1TB of cloud save",
        monthlyPrice: 2,
        yearlyPrice: 20
    },
    {
        id: 3,
        title: "Customizable profile",
        subTitle: "Custom theme on your profile",
        monthlyPrice: 2,
        yearlyPrice: 20
    }
];

const handleCheckboxChange = (props: TAddons, checked: boolean) => {
    if(checked) {
        console.log('legg til');
        return injectedAddon?.AddAddonToSelected(props);
    }
    return injectedAddon?.RemoveAddonFromSelected(props.id)
}

</script>

<template>
    <AddonsViewItemsVue v-for="addon in addons" 
    :id="addon.id"
    :title="addon.title" 
    :sub-title="addon.subTitle" 
    :monthly-price="addon.monthlyPrice"
    :yearly-price="addon.yearlyPrice"
    @checkboxChange="handleCheckboxChange"
    />
</template>