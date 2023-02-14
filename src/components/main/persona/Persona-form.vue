<script setup lang="ts">
import { personaliaKey, selectedStepKey } from "@/keys";
import type { TPersonaliaProvider, TSelectedStepProvider } from "@/types";
import { inject, ref } from "vue";

const personaliaProvider = inject<TPersonaliaProvider>(personaliaKey);
const step = inject<TSelectedStepProvider>(selectedStepKey);
const personalia = personaliaProvider?.personalia;

const name = ref(personalia?.value.name);
const email = ref(personalia?.value.email);
const phoneNumber = ref(personalia?.value.phoneNumber);

const showNameError = ref(false);
const showEmailError = ref(false);
const showPhoneNumberError = ref(false);

// Not optimal, but it works :)
const checkFormValidity = () => {
  const form = document.getElementById("personaliaForm") as HTMLFormElement;
  if (form.checkValidity() && step) {
    step.disableNext.value = false;
  }
};

const handleNameChange = (event: Event) => {
  const element = event.target as HTMLInputElement;
  if (!element.checkValidity()) {
    return (showNameError.value = true);
  }
  showNameError.value = false;
  const value = element.value;
  if (personalia) {
    personalia.value.name = value;
    personaliaProvider.setPersonalia(personalia.value);
  }
  checkFormValidity();
};

const handleEmailChange = (event: Event) => {
  const element = event.target as HTMLInputElement;
  if (!element.checkValidity()) return (showEmailError.value = true);
  showEmailError.value = false;
  const value = element.value;
  if (personalia) {
    personalia.value.email = value;
    personaliaProvider.setPersonalia(personalia.value);
  }
  checkFormValidity();
};

const handlePhoneNumberChange = (event: Event) => {
  const element = event.target as HTMLInputElement;
  if (!element.checkValidity()) return (showPhoneNumberError.value = true);
  showPhoneNumberError.value = false;
  const value = element.value;
  if (personalia) {
    personalia.value.phoneNumber = value;
    personaliaProvider.setPersonalia(personalia.value);
  }
  checkFormValidity();
};
</script>

<template v-if="personalia">
  <form id="personaliaForm" class="flex flex-col gap-y-4">
    <div class="flex flex-col">
      <div class="flex flex-row justify-between">
        <label class="block text-marineBlue font-medium">Name</label>
        <label v-if="showNameError" class="text-strawberryRed">
          . This field is required
        </label>
      </div>
      <input
        v-model="name"
        @input="handleNameChange"
        type="text"
        name="formName"
        minlength="2"
        maxlength="30"
        class="mt-1 block w-full font-medium text-coolGray rounded cursor-pointer"
        placeholder="e.g. Stephen King"
        required
      />
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row justify-between">
        <label class="block text-marineBlue font-medium">Email Address</label>
        <label v-if="showEmailError" class="text-strawberryRed">
          . This field is required
        </label>
      </div>
      <input
        v-model="email"
        @input="handleEmailChange"
        type="text"
        name="formEmailAdress"
        class="mt-1 block w-full font-medium text-coolGray rounded cursor-pointer"
        placeholder="e.g. stephenking@lorem.com"
        required
      />
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row justify-between font-medium">
        <label class="block text-marineBlue">Phone Number</label>
        <label v-if="showPhoneNumberError" class="text-strawberryRed">
          . This field is required
        </label>
      </div>
      <input
        v-model="phoneNumber"
        @input="handlePhoneNumberChange"
        type="text"
        name="formPhoneNumber"
        minlength="8"
        maxlength="10"
        class="mt-1 block w-full font-medium text-coolGray rounded cursor-pointer"
        placeholder="e.g. + 1 234 567 890"
        required
      />
    </div>
  </form>
</template>
