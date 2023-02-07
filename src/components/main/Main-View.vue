<script setup lang="ts">
import { selectedStepKey } from '@/keys';
import type { TSelectedStep, TMainContent } from '@/types';
import { inject, ref, watch } from 'vue';
import PersonaForm from './persona/Persona-form.vue';
import PlanView from './plan/Plan-View.vue';
import Addons from './addons/addons.vue'
import TranslatedContainer from './Translated-Container.vue'

// This will mainly function as a router-type component to decide which header, subtitle and component that
// gets displayed in the translated component

const step = inject<TSelectedStep>(selectedStepKey);

const contentRender: TMainContent[]  = [
    {
        title: "Personal Info",
        subTitle: "Please provide your name, email address, and phone number",
        component: PersonaForm
    },
    {
        title: "Select your plan",
        subTitle: "You have the option of monthly or yearly billing",
        component: PlanView
    },
    {
        title: "Pick add-ons",
        subTitle: "Add-ons help enhance your gaming experience",
        component: Addons
    }
];


</script>

<template>
    <div v-if="step" class="h-full w-full overflow-hidden bg-lightGray bg-opacity-25">
        <TranslatedContainer 
        :title="contentRender[step.selectedStep.value - 1].title" 
        :subTitle="contentRender[step.selectedStep.value - 1].subTitle">
            <component :is="contentRender[step.selectedStep.value - 1].component" />
        </TranslatedContainer>
    </div>
</template>