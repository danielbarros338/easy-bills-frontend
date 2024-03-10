import { defineStore } from "pinia";

export const useAuthStore = defineStore("Auth", {
  state: () => ({
    user: { teste: "teste" },
  }),
  actions: {
    async signUp(user) {
      try {
        const response = await fetch(process.env.URL_BACKEND + "/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        return await response.json();
      } catch (err) {
        console.error(err);
      }
    },
  },
});
