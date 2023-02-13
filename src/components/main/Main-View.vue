<script setup lang="ts">
import { selectedStepKey } from '@/keys';
import type { TSelectedStepProvider, TMainContent } from '@/types';
import { inject, ref, watch } from 'vue';
import PersonaForm from './persona/Persona-form.vue';
import PlanView from './plan/Plan-View.vue';
import AddonsView from './addons/Addons-View.vue'
import TranslatedContainer from './Translated-Container.vue'
import SummaryView from './summary/Summary-View.vue';
import Confirmation from './summary/Confirmation.vue'

// This will mainly function as a router-type component to decide which header, subtitle and component that
// gets displayed in the translated component

const step = inject<TSelectedStepProvider>(selectedStepKey);

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
        component: AddonsView
    },
    {
        title: "Finishing up",
        subTitle: "Double-check everything looks OK before confirming",
        component: SummaryView
    }
];

</script>

<template>
    <div id="MainView" class="h-full w-full overflow-hidden xl:w-auto xl:max-h-full">
        <TranslatedContainer 
        v-if="step && !step.final.value"
        :title="contentRender[step.selectedStep.value - 1].title" 
        :subTitle="contentRender[step.selectedStep.value - 1].subTitle">
        <KeepAlive>
            <component :is="contentRender[step.selectedStep.value - 1].component" />
        </KeepAlive>
        </TranslatedContainer>
        <TranslatedContainer v-if="step && step.final.value">
            <component :is="Confirmation" />
        </TranslatedContainer>
    </div>
</template>