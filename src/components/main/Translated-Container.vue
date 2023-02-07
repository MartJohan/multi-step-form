<script setup lang="ts">


type TInputProps = {
    title: string;
    subTitle: string;
}

const props = defineProps<TInputProps>();

console.log(props)

</script>

<template>
    <div class="bg-white -translate-y-16 z-10 absolute rounded w-fit p-4 m-4 drop-shadow-lg">
        <div class="w-full h-full flex flex-col p-4 gap-y-2">
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