const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/control",
        component: () => import("src/pages/control/ControlPage.vue"),
        children: [
          {
            path: "new-month",
            component: () => import("src/pages/control/NewMonthPage.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/signup",
    component: () => import("pages/SignUpPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
