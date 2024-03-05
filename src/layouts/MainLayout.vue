<template>
  <q-layout view="hHh Lpr lFf">
    <NavbarComponent />

    <q-page-container class="container bg-primary" style="overflow-y: scroll">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavbarComponent from "./../components/layout/NavbarComponent.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    NavbarComponent,
  },
});
</script>
