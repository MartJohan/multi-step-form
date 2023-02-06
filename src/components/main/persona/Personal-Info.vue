<script setup lang="ts">
import PersonaForm from './Persona-form.vue';


</script>

<template>
    <div class="w-full h-full flex flex-col p-4 gap-y-2">
        <h1 class="text-marineBlue font-bold text-xl">
            Personal info
        </h1>
        <p class="text-coolGray">
            Please provide your name, email address, and phone number
        </p>
        <PersonaForm />
    </div>
</template>