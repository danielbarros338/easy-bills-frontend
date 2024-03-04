<template>
  <div class="container bg-primary row justify-center items-center">
    <CardBaseComponent :form="true" :head="true">
      <template #head>
        <q-img
          class="rounded-borders"
          src="~/assets/imgs/eb-logo.png"
          width="120px"
        />
      </template>

      <template #body>
        <q-input class="full-width" rounded standout="bg-white" label="Email" />
        <q-input
          class="full-width q-my-sm"
          rounded
          standout="bg-white"
          label="Senha"
          type="password"
        />
      </template>

      <template #btn_container>
        <!-- Redirect to index temporarily -->
        <q-btn color="positive" label="Entrar" to="/" />
        <q-btn color="dark" label="Cadastrar" to="/signup" />
      </template>
    </CardBaseComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",
  setup() {},
});
</script>

<style scoped>
.inputs {
  width: 100%;
}
</style>
