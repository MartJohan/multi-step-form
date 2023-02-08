<script setup lang="ts">


type TInputProps = {
    title?: string;
    subTitle?: string;
}

const props = defineProps<TInputProps>();

</script>

<template>
    <div class="bg-white -translate-y-16 absolute rounded-lg w-fit m-4 px-2 drop-shadow-lg z-40">
        <div class="w-full h-full flex flex-col p-4">
            <h1 class="text-marineBlue font-bold text-xl">
                {{ props.title }}
            </h1>
            <p class="text-coolGray">
                {{ props.subTitle }}
            </p>
            <slot />
        </div>
    </div>
</template>