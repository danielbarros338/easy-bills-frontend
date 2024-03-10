<template>
  <CardBaseComponent background="bg-grey-2" :head="true">
    <template #head>
      <h4 class="full-width q-my-sm">Novo Mês</h4>
    </template>

    <template #body>
      <div class="col-12 month-container">
        <q-input standout="bg-white" label="Mês" type="month" />
      </div>

      <div class="col-12 earnings-container">
        <h5 class="full-width q-my-sm">Ganhos</h5>

        <div class="full-width table-container text-dark">
          <q-table></q-table>
        </div>

        <EarningComponent title="Novo ganho" />
        <q-btn class="float-right" rounded color="positive" label="+" />
      </div>

      <div class="col-12 spending-container">
        <h5 class="full-width q-my-sm">Gastos</h5>

        <div class="full-width table-container text-dark">
          <q-table></q-table>
        </div>

        <SpendingComponent title="Novo gasto" />
        <q-btn class="float-right" rounded color="positive" label="+" />
      </div>

      <div class="col-12 flex justify-between q-mt-lg btn-container">
        <q-btn color="positive" label="Salvar" />
        <q-btn color="dark" label="Voltar" to="/control" />
      </div>
    </template>
  </CardBaseComponent>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewMonthPage",
});
</script>

<script setup></script>
