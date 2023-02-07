<script setup lang="ts">import { ref } from 'vue';


type TAddonsProps = {
    title: string,
    subTitle: string,
    monthlyPrice: number
}

const props = defineProps<TAddonsProps>()

const checked = ref(false);

const localCheckboxChange = () => {
    checked.value = !checked.value
}

</script>

<template>
    <div class="flex flex-row border border-coolGray rounded-lg p-2 my-2 items-center justify-between"
        :class="checked ? 'bg-magnolia border-purplishBlue' : ''">
        <input 
            type="checkbox" 
            name="addonCheckbox" 
            :value="props"
            @change="(event) => { localCheckboxChange(); $emit('checkboxChange', props, checked) }"
            class="p-2 m-2 checked:bg-purplishBlue checked:ring-0 focus:ring-0"
            :class="checked ? 'text-purplishBlue' : ''"
            >
        
        <div class="flex flex-col">
            <p class="font-semibold text-marineBlue">
                {{ props.title }}
            </p>
            <p class="text-sm text-coolGray">
                {{ props.subTitle }}
            </p>
        </div>
        <p class="text-purplishBlue text-sm">
            +${{ props.monthlyPrice }}/mo
        </p>
    </div>
</template>