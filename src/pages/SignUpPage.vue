<template>
  <div class="container bg-primary row justify-center items-center">
    <q-card
      class="login-card bg-secondary row wrap justify-center items-center q-px-sm"
    >
      <q-form class="input-container" @submit="signUp">
        <q-input
          v-model="user.name"
          class="q-my-sm"
          rounded
          standout="bg-secondary"
          label="Nome completo"
        />
        <q-input
          v-model="user.email"
          class="q-my-sm"
          rounded
          standout="bg-secondary"
          label="Email"
        />
        <q-input
          v-model="user.password"
          class="q-my-sm"
          rounded
          standout="bg-secondary"
          label="Senha"
          type="password"
        />
        <q-input
          v-model="confirmPass"
          class="q-my-sm"
          rounded
          standout="bg-secondary"
          label="Confirme a senha"
          type="password"
        />
        <div class="btn-container flex justify-between q-px-sm">
          <!-- Redirect to index temporarily -->
          <q-btn color="positive" label="Cadastrar" @click="signUp" />
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
});
</script>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/auth";
import { useQuasar } from "quasar";

const authStore = useAuthStore();
const $q = useQuasar();

const confirmPass = ref("");
const user = ref({
  name: "",
  email: "",
  password: "",
});

async function signUp(e) {
  e.preventDefault();

  const response = await authStore.signUp(user.value);
}
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
