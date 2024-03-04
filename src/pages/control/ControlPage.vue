<template>
  <div class="row">
    <div class="col-12">
      <q-btn
        color="positive"
        label="Iniciar novo mês"
        to="/control/new-month"
      />
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
