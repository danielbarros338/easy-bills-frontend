<template>
  <div class="row">
    <div class="col-12">
      <q-btn
        class="q-ma-sm"
        color="positive"
        label="Novo mês"
        to="/control/new-month"
      />

      <!-- <q-btn
        class="q-ma-sm"
        color="positive"
        label="Editar mês"
        to="/control/edit-month"
      />

      <q-btn
        class="q-ma-sm"
        color="positive"
        label="Lista de meses"
        to="/control/list-month"
      /> -->
    </div>
    <div class="col-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ControlPageComponent",
});
</script>
