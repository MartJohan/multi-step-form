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
    class="bg-white -translate-y-16 absolute rounded-lg w-fit m-4 px-2 drop-shadow-lg z-40 md:-translate-y-0 md:block md:w-auto md:h-full md:static md:drop-shadow-none"
  >
    <div
      class="w-full h-full flex flex-col p-4 mx-auto md:max-w-[75%] md:my-12 md:gap-y-4"
    >
      <h1 class="text-marineBlue font-bold text-xl md:text-4xl">
        {{ props.title }}
      </h1>
      <p class="text-coolGray font-medium">
        {{ props.subTitle }}
      </p>
      <slot />
    </div>
  </div>
</template>
