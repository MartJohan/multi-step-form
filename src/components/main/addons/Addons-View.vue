<script setup lang="ts">

import AddonsViewItemsVue from './Addons-View-Item.vue';
import type { TAddons } from '@/types';

const addons: TAddons[] = [
    {
        title: "Online service",
        subTitle: "Access to multiplayer games",
        monthlyPrice: 1
    },
    {
        title: "Larger storage",
        subTitle: "Extra 1TB of cloud save",
        monthlyPrice: 2
    },
    {
        title: "Customizable profile",
        subTitle: "Custom theme on your profile",
        monthlyPrice: 2
    }
];





const handleCheckboxChange = (props: TAddons, checked: boolean) => {

}

</script>

<template>
    <AddonsViewItemsVue v-for="addon in addons" 
    :title="addon.title" 
    :sub-title="addon.subTitle" 
    :monthly-price="addon.monthlyPrice"
    @checkboxChange="handleCheckboxChange"
    />
</template>