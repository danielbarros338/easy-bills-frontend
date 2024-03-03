<template>
  <div class="container bg-primary row justify-center items-center">
    <q-card
      class="login-card bg-secondary row wrap justify-center items-center q-px-sm"
    >
      <div>
        <q-img
          class="rounded-borders"
          src="~/assets/imgs/eb-logo.png"
          width="120px"
        />
      </div>
      <q-form class="input-container">
        <q-input class="q-my-sm" rounded standout="bg-white" label="Email" />
        <q-input
          class="q-my-sm"
          rounded
          standout="bg-white"
          label="Senha"
          type="password"
        />
        <div class="btn-container flex justify-between q-px-sm">
          <q-btn color="positive" label="Entrar" />
          <q-btn color="dark" label="Cadastrar" />
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
