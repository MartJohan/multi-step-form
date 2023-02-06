<script setup lang="ts">
import { selectedStepKey } from '@/keys';
import type { TSelectedStep } from '@/types';
import { inject } from 'vue';
import PersonalInfo from './persona/Personal-Info.vue'
import PlanView from './plan/Plan-View.vue'
import TranslatedContainer from './Translated-Container.vue'

const step = inject<TSelectedStep>(selectedStepKey);


</script>

<template>
    <div class="h-full w-full overflow-hidden bg-lightGray bg-opacity-25">
        <TranslatedContainer>
            <PersonalInfo  v-if="step?.selectedStep.value === 1"/>
            <PlanView v-if="step?.selectedStep.value === 2"/>
        </TranslatedContainer>
    </div>
</template>