<template>
  <div>
    <h5 class="q-my-none">{{ title }}</h5>
    <q-input
      class="q-my-sm"
      rounded
      standout="bg-white"
      label="Nome"
      type="text"
    />
    <q-input
      class="q-my-sm"
      rounded
      standout="bg-white"
      label="Valor"
      type="text"
    />
    <q-input
      class="q-my-sm"
      rounded
      standout="bg-white"
      label="Data"
      type="date"
    />
    <q-select
      class="q-my-sm"
      rounded
      standout="bg-white"
      label="Tipo de ganho"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EarningComponent",
});
</script>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
