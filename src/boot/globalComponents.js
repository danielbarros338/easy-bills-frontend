import { boot } from "quasar/wrappers";
import NavbarComponent from "./../components/layout/NavbarComponent.vue";

export default boot(async ({ app }) => {
  app.component("NavbarComponent", NavbarComponent);
});
