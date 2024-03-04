<template>
  <CardBaseComponent background="bg-grey-2" :head="true">
    <template #head>
      <h4 class="full-width q-my-sm">Novo Mês</h4>
    </template>

    <template #body>
      <div class="col-12 earnings-container text-dark">
        <h5 class="full-width q-my-sm">Ganhos</h5>

        <div class="full-width table-container text-dark">
          <q-table></q-table>
        </div>

        <EarningComponent title="Novo ganho" />
        <q-btn class="float-right" rounded color="positive" label="+" />
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
