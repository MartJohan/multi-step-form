<script setup lang="ts">
type TInputProps = {
  title?: string;
  subTitle?: string;
};

const props = defineProps<TInputProps>();
</script>

<template>
  <div
    id="TranslatedView"
    class="bg-white -translate-y-16 absolute rounded-lg w-fit m-4 px-2 drop-shadow-lg z-40 xl:-translate-y-0 xl:block xl:w-auto xl:h-full xl:static xl:drop-shadow-none"
  >
    <div
      class="w-full h-full flex flex-col p-4 mx-auto xl:max-w-[75%] xl:my-12 xl:gap-y-4"
    >
      <h1 class="text-marineBlue font-bold text-xl xl:text-4xl">
        {{ props.title }}
      </h1>
      <p class="text-coolGray font-medium">
        {{ props.subTitle }}
      </p>
      <slot />
    </div>
  </div>
</template>
