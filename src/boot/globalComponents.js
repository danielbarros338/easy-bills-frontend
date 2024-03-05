import { boot } from "quasar/wrappers";
import CardBaseComponent from "./../components/shared/CardBaseComponent.vue";
import EarningComponent from "./../components/shared/EarningComponent.vue";
import SpendingComponent from "./../components/shared/SpendingComponent.vue";

export default boot(async ({ app }) => {
  app.component("CardBaseComponent", CardBaseComponent);
  app.component("EarningComponent", EarningComponent);
  app.component("SpendingComponent", SpendingComponent);
});
