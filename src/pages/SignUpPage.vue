<template>
  <div class="container bg-primary row justify-center items-center">
    <q-card
      class="login-card bg-secondary row wrap justify-center items-center q-px-sm"
    >
      <q-form class="input-container">
        <q-input
          class="q-my-sm"
          rounded
          standout="bg-white"
          label="Nome completo"
        />
        <q-input class="q-my-sm" rounded standout="bg-white" label="Email" />
        <q-input
          class="q-my-sm"
          rounded
          standout="bg-white"
          label="Senha"
          type="password"
        />
        <q-input
          class="q-my-sm"
          rounded
          standout="bg-white"
          label="Confirme a senha"
          type="password"
        />
        <div class="btn-container flex justify-between q-px-sm">
          <!-- Redirect to index temporarily -->
          <q-btn color="positive" label="Cadastrar" to="/" />
          <q-btn color="dark" label="Voltar" to="/login" />
        </div>
      </q-form>
    </q-card>
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
.login-card {
  height: 50%;
  width: 100%;
}
.input-container {
  width: 100%;
}
</style>
