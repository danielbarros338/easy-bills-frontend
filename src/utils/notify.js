import { Notify } from "quasar";

export default {
  success(message) {
    Notify.create({
      message,
      progress: true,
      position: "top-right",
      color: "positive",
      timeout: 2000,
      actions: [{ label: "X", color: "dark", handler: () => {} }],
    });
  },
  warning(message) {
    Notify.create({
      message,
      progress: true,
      position: "top-right",
      color: "amber",
      timeout: 2000,
      actions: [{ label: "X", color: "dark", handler: () => {} }],
    });
  },
  error(message) {
    Notify.create({
      message,
      progress: true,
      position: "top-right",
      color: "red",
      timeout: 2000,
      actions: [{ label: "X", color: "dark", handler: () => {} }],
    });
  },
};
