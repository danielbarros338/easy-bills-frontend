<template>
  <div class="container bg-primary row justify-center items-center">
    <CardBaseComponent>
      <template #body>
        <q-form class="input-container" @submit="signUp">
          <q-input
            v-model="user.name"
            name="name"
            class="q-my-sm"
            rounded
            standout="bg-secondary"
            label="Nome completo"
            :rules="[inputRules.name]"
          />
          <q-input
            v-model="user.email"
            name="email"
            class="q-my-sm"
            rounded
            standout="bg-secondary"
            label="Email"
            :rules="[inputRules.email]"
          />
          <q-input
            v-model="user.password"
            name="password"
            class="q-my-sm"
            rounded
            standout="bg-secondary"
            label="Senha"
            type="password"
            :rules="[inputRules.password]"
          />
          <q-input
            v-model="confirmPass"
            class="q-my-sm"
            rounded
            standout="bg-secondary"
            label="Confirme a senha"
            type="password"
            :rules="[inputRules.confirmPass]"
          />
          <div class="btn-container flex justify-between q-px-sm">
            <!-- Redirect to index temporarily -->
            <q-btn color="positive" label="Cadastrar" type="submit" />
            <q-btn color="dark" label="Voltar" to="/login" />
          </div>
        </q-form>
      </template>
    </CardBaseComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",
});
</script>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/auth";
import { useQuasar } from "quasar";

import notify from "@/utils/notify.js";
import { inputRules } from "@/utils/rulesAndVerifications.js";

const authStore = useAuthStore();
const $router = useRouter();
const $q = useQuasar();

const confirmPass = ref("");
const user = ref({
  name: "",
  email: "",
  password: "",
});

async function signUp(e) {
  e.preventDefault();

  if (!_verifyValues()) return;

  const goToHome = await authStore.signUp(user.value);

  if (goToHome) {
    $router.push("/");
  }
}

function _verifyValues() {
  if (user.value.password !== confirmPass.value) {
    notify.error("As senhas não são iguais.");

    return false;
  }

  return true;
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
