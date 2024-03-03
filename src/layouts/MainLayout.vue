<template>
  <q-layout view="hHh Lpr lFf">
    <NavbarComponent />

    <q-page-container class="container bg-primary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
});
</script>
