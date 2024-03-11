import { defineStore } from "pinia";
import notify from "@/utils/notify";

export const useAuthStore = defineStore("Auth", {
  state: () => ({
    user: {},
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async signUp(user) {
      try {
        const response = await fetch(process.env.URL_BACKEND + "/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        if (response.status === 201) {
          const res = await response.json();
          this.user = res.data;

          notify.success(res.message);

          return true;
        } else {
          const res = await response.json();

          notify.error(res.message);

          return false;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});
