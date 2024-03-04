import { boot } from "quasar/wrappers";
import CardBaseComponent from "./../components/shared/CardBaseComponent.vue";

export default boot(async ({ app }) => {
  app.component("CardBaseComponent", CardBaseComponent);
});
