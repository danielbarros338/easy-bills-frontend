<template>
  <q-card :class="['card q-px-sm', background]">
    <q-card-section v-if="head" class="row wrap justify-center items-center">
      <slot name="head" />
    </q-card-section>

    <q-card-section v-if="form" class="row wrap justify-center items-center">
      <q-form class="form-container">
        <div class="flex wrap justify-center items-center">
          <slot name="body" />
        </div>

        <div class="flex justify-between q-mt-sm">
          <slot name="btn_container" />
        </div>
      </q-form>
    </q-card-section>
    <q-card-section v-else class="row wrap justify-center items-center">
      <slot name="body" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardBaseComponent",
});
</script>

<script setup>
defineProps({
  head: {
    type: Boolean,
    default: false,
  },
  form: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: "bg-secondary",
  },
});
</script>

<style scoped>
.card {
  width: 100%;
}

.body-container,
.form-container {
  width: 100%;
}
</style>
