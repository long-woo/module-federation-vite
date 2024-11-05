import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import * as bridge from "@module-federation/bridge-vue3";

const App1 = bridge.createRemoteComponent({
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	loader: () => import("app1/mod"),
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/app1/:pathMatch(.*)*",
			name: "app1",
			component: App1,
		},
	],
});

export default router;
