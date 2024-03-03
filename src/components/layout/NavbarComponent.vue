<template>
  <q-toolbar class="bg-secondary">
    <q-img
      class="rounded-borders q-mr-md"
      src="~/assets/imgs/eb-logo.png"
      width="50px"
    />

    <q-space />

    <q-tabs inline-label shrink class="">
      <q-tab name="home" icon="home" label="Início" />
      <q-tab name="payments" icon="payments" label="Controle" />
      <q-tab name="cards" icon="credit_card" label="Cartões" />
      <q-tab name="report" icon="book" label="Relatórios" />
      <q-tab name="logout" icon="logout" label="Sair" />
    </q-tabs>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NavbarComponent",
});
</script>
